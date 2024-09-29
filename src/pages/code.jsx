import React from "react";
import Menu from "../components/main/navbar";
import CodeOfConduct from "../components/code/codeofconduct";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";

export default function Home() {
  return (
    <main>
      <SiteData title="Code of Conduct" description="The Rhino Linux Contributor Code of Conduct." />
      <Menu />
      <CodeOfConduct />
      <Footer />
    </main>
  );
}
  