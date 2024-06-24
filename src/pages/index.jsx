import React from "react";
import Menu from "../components/navbar";
import Hero from "../components/hero";
import Latest from "../components/latest";
import Developers from "../components/developers";
import Desktop from "../components/desktop";
import Packages from "../components/packages";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Latest />
      <Developers />
      <Desktop />
      <Packages />
    </main>
  );
}
