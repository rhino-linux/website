import React from "react";
import Menu from "../components/navbar";
import Hero from "../components/hero";
import Latest from "../components/latest";
import Developers from "../components/developers";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Latest />
      <Developers />
    </main>
  );
}
