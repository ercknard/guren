"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

function App() {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });
  return (
    <>
      <main className="App">
        <DynamicComponent />
      </main>
    </>
  );
}

export default App;
