"use client";
import React, { useEffect, useState } from "react";
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
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
