import React from "react";
import Hero from "../components/hero";
import Unicorn from "../components/unicorn";
import Developers from "../components/developers"
import Quote from "../components/quote";

export default function Home() {
  return (
    <main>
      <Hero />
      <Unicorn />
      <Developers />
      <Quote />
    </main>
  );
}
