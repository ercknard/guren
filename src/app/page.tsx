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
            <h1 className="main-title"> ERCKNARD GUREN V </h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
