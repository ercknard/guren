"use client";
import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

function App() {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });

  return (
    <>
      <main className="App">
        <DynamicComponent />
        <div className="landing-container"></div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
