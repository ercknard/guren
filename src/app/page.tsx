"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navigation from "@/layout/Navigation";

function App() {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });

  return (
    <>
      <main className="App">
        <Navigation />
        <DynamicComponent />
        <div className="landing-container"></div>
      </main>
    </>
  );
}

export default App;
