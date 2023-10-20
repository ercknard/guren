"use client";
import React from "react";
import useLocalStorage from "use-local-storage";
import Footer from "@/components/Footer";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchThemeYellow = () => {
    const newTheme = "yellow";
    setTheme(newTheme);
  };

  const switchThemeRed = () => {
    const newTheme = "red";
    setTheme(newTheme);
  };

  const switchThemeMagenta = () => {
    const newTheme = "magenta";
    setTheme(newTheme);
  };

  const switchThemePurple = () => {
    const newTheme = "purple";
    setTheme(newTheme);
  };

  const switchThemeViolet = () => {
    const newTheme = "violet";
    setTheme(newTheme);
  };

  const switchThemeBlue = () => {
    const newTheme = "blue";
    setTheme(newTheme);
  };

  const switchThemeOcean = () => {
    const newTheme = "ocean";
    setTheme(newTheme);
  };

  const switchThemeGreen = () => {
    const newTheme = "green";
    setTheme(newTheme);
  };

  return (
    <>
      <main className="App" data-theme={theme}>
        <button className="yellow-eye" onClick={switchThemeYellow} />
        <button className="red-eye" onClick={switchThemeRed} />
        <button className="magenta-eye" onClick={switchThemeMagenta} />
        <button className="purple-eye" onClick={switchThemePurple} />
        <button className="violet-eye" onClick={switchThemeViolet} />
        <button className="blue-eye" onClick={switchThemeBlue} />
        <button className="ocean-eye" onClick={switchThemeOcean} />
        <button className="green-eye" onClick={switchThemeGreen} />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
