import React from "react";
import Menu from "../components/main/navbar";
import CodeOfConduct from "../components/code/codeofconduct";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";
import ThemeSwitcher from "@/components/theme/themeSwitcher";

export default function Home() {
  return (
    <main className="bg-site-400-light dark:bg-site-400-dark">
      <SiteData title="Code of Conduct" description="The Rhino Linux Contributor Code of Conduct." />
      <Menu />
      <CodeOfConduct />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
  