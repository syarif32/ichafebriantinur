import type { Metadata } from "next";
import { portfolio } from "@/data/global";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: `${portfolio.profile.name} | ${portfolio.site.name}`,
    template: `%s | ${portfolio.profile.name}`,
  },
  description: portfolio.site.description.id,
  ...(portfolio.site.url ? { metadataBase: new URL(portfolio.site.url) } : {}),
  icons: { icon: "/icon.svg" },
};
const themeScript = `(function(){document.documentElement.lang=location.pathname.split('/')[1]==='en'?'en':'id';try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}})()`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
