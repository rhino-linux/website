import React from "react";
import Hero from "../components/unicorn/hero";
import Content from "../components/unicorn/content";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";
import ThemeSwitcher from "@/components/theme/themeSwitcher";

export default function Home() {
  return (
    <main className="bg-site-400-light dark:bg-site-400-dark">
      <SiteData title="Unicorn Desktop" description="A desktop experience designed to be both modern and fast." />
      <Hero />
      <Content />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
