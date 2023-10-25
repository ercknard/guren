"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navigation from "@/layout/Navigation";
import Home from "../../pages/home";

function App() {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });

  return (
    <main className="App">
      <Navigation />
      <DynamicComponent />
      <section>
        <div className="landing-container">
          <div className="landing">
            <Home />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
