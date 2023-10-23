"use client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Particlesview from "@/components/Particles";

function Theme() {
  const [particleColor, setParticleColor] = useState("#ffffff");
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchThemeYellow = () => {
    const newTheme = "yellow";
    setTheme(newTheme);
    const newColor = "#f0d056";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemeRed = () => {
    const newTheme = "red";
    setTheme(newTheme);
    const newColor = "#ff5e5a";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemeMagenta = () => {
    const newTheme = "magenta";
    setTheme(newTheme);
    const newColor = "#9b3a98";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemePurple = () => {
    const newTheme = "purple";
    setTheme(newTheme);
    const newColor = "#b075f8";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemeViolet = () => {
    const newTheme = "violet";
    setTheme(newTheme);
    const newColor = "#7b8ffc";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemeBlue = () => {
    const newTheme = "blue";
    setTheme(newTheme);
    const newColor = "#4389ff";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemeOcean = () => {
    const newTheme = "ocean";
    setTheme(newTheme);
    const newColor = "#5cc2e4";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemeGreen = () => {
    const newTheme = "green";
    setTheme(newTheme);
    const newColor = "#6ef0bc";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  console.log({ theme });

  return (
    <section>
      <Particlesview particleColor={particleColor} />
      <button className="yellow-eye" onClick={switchThemeYellow} />
      <button className="red-eye" onClick={switchThemeRed} />
      <button className="magenta-eye" onClick={switchThemeMagenta} />
      <button className="purple-eye" onClick={switchThemePurple} />
      <button className="violet-eye" onClick={switchThemeViolet} />
      <button className="blue-eye" onClick={switchThemeBlue} />
      <button className="ocean-eye" onClick={switchThemeOcean} />
      <button className="green-eye" onClick={switchThemeGreen} />
    </section>
  );
}

export default Theme;
