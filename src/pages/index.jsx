import React from "react";
import Menu from "../components/navbar";
import Hero from "../components/hero";
import Latest from "../components/latest";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Latest />
    </main>
  );
}
