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
        <div className="landing-container">
          <div className="landing">
            <div className="text-motion icon-text to-hide"> ⚔ </div>
            <div className="main-title text-effect"> ERCKNARD GUREN V </div>
            <div className="sub-title to-width">
              {""}
              Ercknard web portfolio is a digital exhibit of my creative
              journey. Explore my projects, designs, and achievements all in one
              place.{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
