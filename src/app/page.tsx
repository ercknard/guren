"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Particlesview from "@/components/Particles";
import Footer from "@/components/Footer";

function App() {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });
  return (
    <>
      <main className="App">
        <Particlesview />
        <DynamicComponent />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
