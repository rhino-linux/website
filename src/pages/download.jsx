import React from "react";
import Menu from "../components/main/navbar";
import Selection from "../components/download/selection";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";
import ThemeSwitcher from "@/components/theme/themeSwitcher";

export default function Home() {
  return (
    <main className="bg-site-400-light dark:bg-site-400-dark">
      <SiteData title="Download" description="Download the latest build of Rhino Linux." />
      <Menu />
      <Selection />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
