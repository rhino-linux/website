import React from "react";
import Menu from "../components/navbar";
import Hero from "../components/download/hero";
import TargetSelector from "../components/download/targetSelector";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <TargetSelector />
      <Footer />
    </main>
  );
}
