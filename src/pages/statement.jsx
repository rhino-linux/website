import React from "react";
import Menu from "../components/navbar";
import Mission from "../components/statement/mission";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Mission />
      <Footer />
    </main>
  );
}
