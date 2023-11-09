import "@fontsource/ysabeau";
import "@fontsource/ysabeau/400.css";
import "@fontsource/ysabeau/400-italic.css";
import "@/styles/globals.css";
import "@/styles/App.css";
import { Analytics } from "@vercel/analytics/react";
import React, { ReactNode, useState, useEffect } from "react";
import Navigation from "./Navigation";
import dynamic from "next/dynamic";
import AOScall from "@/components/Aos";
import Loader from "@/components/Loader";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const DynamicComponent = dynamic(() => import("@/components/Theme"), {
    ssr: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeAsyncOperation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
    };

    fakeAsyncOperation();
  }, []);

  return (
    <>
      <main className="App">
        <Analytics />
        <DynamicComponent />
        <AOScall />
        <Navigation />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="landing-container">
            <div className="moon" />
            <div className="landing">
              <section className="to-width">{children}</section>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Layout;
