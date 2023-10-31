import "@fontsource/ysabeau";
import "@fontsource/ysabeau/400.css";
import "@fontsource/ysabeau/400-italic.css";
import "@/styles/globals.css";
import "@/styles/App.css";
import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import dynamic from "next/dynamic";
import AOScall from "@/components/Aos";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });

  return (
    <>
      <main className="App">
        <DynamicComponent />
        <AOScall />
        <Navigation />
        <div className="landing-container">
          <div className="moon" />
          <div className="landing">
            <section className="to-width">{children}</section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
