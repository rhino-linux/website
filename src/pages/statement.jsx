import React from "react";
import Menu from "../components/main/navbar";
import Mission from "../components/statement/mission";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";
import ThemeSwitcher from "@/components/theme/themeSwitcher";

export default function Home() {
  return (
    <main className="bg-site-400-light dark:bg-site-400-dark">
      <SiteData title="Mission Statement" description="Creating the go-to, Debian-derived counterpart for Arch." />
      <Menu />
      <Mission />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
