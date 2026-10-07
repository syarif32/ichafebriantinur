/** Regenerate both example CVs from src/data/global.ts: npm run cv */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import ts from "typescript";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
const source = await readFile(
  new URL("../src/data/global.ts", import.meta.url),
  "utf8",
);
const js = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { portfolio: p } = await import(
  `data:text/javascript;base64,${Buffer.from(js).toString("base64")}`
);
const clean = (s) =>
  String(s)
    .replace(/\u00d7/g, "x")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[^\x20-\x7e\xa0-\xff]/g, "");
for (const locale of ["id", "en"]) {
  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const color = rgb(0.14, 0.19, 0.16),
    muted = rgb(0.36, 0.4, 0.37),
    green = rgb(0.27, 0.38, 0.3);
  let page, y;
  const newPage = () => {
    page = pdf.addPage([595.28, 841.89]);
    y = 787;
  };
  newPage();
  const drawLine = (
    line,
    { size = 10, font = regular, ink = color, indent = 0, gap = 15 } = {},
  ) => {
    if (y < 58) newPage();
    page.drawText(clean(line), { x: 50 + indent, y, size, font, color: ink });
    y -= gap;
  };
  const paragraph = (value, options = {}) => {
    const size = options.size || 10;
    const font = options.font || regular;
    const limit = 495 - (options.indent || 0);
    const words = clean(value).split(/\s+/);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(test, size) > limit && line) {
        drawLine(line, options);
        line = word;
      } else line = test;
    }
    if (line) drawLine(line, options);
  };
  const section = (id, en) => {
    if (y < 115) newPage();
    y -= 13;
    drawLine(locale === "id" ? id : en, {
      size: 11,
      font: bold,
      ink: green,
      gap: 18,
    });
    page.drawLine({
      start: { x: 50, y: y + 7 },
      end: { x: 545, y: y + 7 },
      color: rgb(0.83, 0.87, 0.83),
      thickness: 0.7,
    });
  };
  paragraph(p.profile.name, { size: 24, font: bold, gap: 32 });
  paragraph(p.profile.role[locale], { size: 12, ink: green, gap: 22 });
  paragraph(`${p.profile.email}  |  ${p.profile.location}`, {
    size: 9,
    ink: muted,
    gap: 20,
  });
  paragraph(p.profile.summary[locale], { size: 10, gap: 15 });
  section("PENDIDIKAN", "EDUCATION");
  for (const e of p.education) {
    paragraph(`${e.institution} | ${e.period[locale]}`, { font: bold });
    paragraph(e.qualification[locale]);
    if (e.showGpa)
      paragraph(`${locale === "id" ? "IPK" : "GPA"}: ${e.gpa} / ${e.gpaMax}`, {
        ink: muted,
      });
    y -= 5;
  }
  section("PENGALAMAN", "EXPERIENCE");
  for (const e of p.experience) {
    paragraph(`${e.role[locale]} - ${e.organization}`, { font: bold });
    paragraph(e.period[locale], { ink: muted, size: 9 });
    for (const bullet of e.bullets)
      paragraph(`- ${bullet[locale]}`, { indent: 8, size: 9, gap: 13 });
    y -= 5;
  }
  section("KEAHLIAN", "SKILLS");
  for (const s of p.skills)
    paragraph(
      `${s.category[locale]}: ${s.items.map((item) => item.name[locale]).join(", ")}`,
      { size: 9, gap: 14 },
    );
  section("KARYA PILIHAN", "SELECTED WORK");
  for (const project of p.projects.filter((project) => project.featured)) {
    paragraph(project.title[locale], { font: bold, size: 10 });
    paragraph(project.description[locale], { size: 9, gap: 13 });
    y -= 4;
  }
  section("SERTIFIKASI & PRESTASI", "CERTIFICATIONS & ACHIEVEMENTS");
  for (const cert of p.certifications)
    paragraph(`${cert.title[locale]} | ${cert.issuer} | ${cert.year}`, {
      size: 9,
      gap: 13,
    });
  for (const a of p.achievements)
    paragraph(`${a.title[locale]} | ${a.year}`, { size: 9, gap: 13 });
  const pages = pdf.getPages();
  pages.forEach((pg, index) =>
    pg.drawText(clean(`${p.profile.name} | ${index + 1} / ${pages.length}`), {
      x: 50,
      y: 30,
      size: 8,
      font: regular,
      color: muted,
    }),
  );
  pdf.setTitle(`${p.profile.name} - Curriculum Vitae`);
  pdf.setAuthor(p.profile.name);
  const file = p.profile.cv[locale];
  if (!file.startsWith("/") || file.includes(".."))
    throw new Error("Use a local /documents/ file path for the CV generator.");
  const target = new URL(`../public${file}`, import.meta.url);
  await mkdir(new URL(".", target), { recursive: true });
  await writeFile(target, await pdf.save());
  console.log(`Generated ${file}`);
}
