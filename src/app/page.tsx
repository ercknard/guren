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
            <div className="main-title"> ERCKNARD GUREN V </div>
            <div className="sub-title to-width">
              {" "}
              Ercknard web portfolio is a digital exhibit of my creative
              journey. Explore my projects, designs, and achievements all in one
              place. Get to know my skills and passion through a collection of
              my best work, beautifully presented for your inspiration and
              insight.{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
