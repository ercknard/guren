import "@fontsource/ysabeau";
import "@fontsource/ysabeau/400.css";
import "@fontsource/ysabeau/400-italic.css";
import "@/styles/globals.css";
import "@/styles/App.css";
import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import dynamic from "next/dynamic";
import { Fab } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });

  return (
    <main className="App">
      <DynamicComponent />
      <Navigation />
      <div className="landing-container">
        <div className="landing">
          <section>{children}</section>
        </div>
      </div>
    </main>
  );
};

export default Layout;
