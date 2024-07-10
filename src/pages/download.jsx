import React from "react";
import Menu from "../components/navbar";
import Hero from "../components/download/hero";
import Target from "../components/download/target";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Target />
      <Footer />
    </main>
  );
}
