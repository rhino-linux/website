import React from "react";
import Menu from "../components/navbar";
import Hero from '../components/news/hero';
import Posts from "../components/news/posts";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Posts />
      <Footer />
    </main>
  );
}
