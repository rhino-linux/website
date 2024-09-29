import React from "react";
import Menu from "../components/main/navbar";
import Selection from "../components/download/selection";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";

export default function Home() {
  return (
    <main>
      <SiteData title="Download" description="Download the latest build of Rhino Linux." />
      <Menu />
      <Selection />
      <Footer />
    </main>
  );
}
