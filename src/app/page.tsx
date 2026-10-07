import { redirect } from "next/navigation";
import { portfolio } from "@/data/global";
export default function Index() {
  redirect(`/${portfolio.site.defaultLocale}`);
}
