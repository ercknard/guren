"use client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Particlesview from "@/components/Particles";
import { Fab } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Theme() {
  const [particleColor, setParticleColor] = useState("#ffffff");
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [bg, setBG] = useLocalStorage("bg", defaultDark ? "dark" : "light");

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

  const switchThemeBlood = () => {
    const newTheme = "blood";
    setTheme(newTheme);
    const newColor = "#f58231";
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

  const switchThemeWhite = () => {
    const newTheme = "white";
    setTheme(newTheme);
    const newColor = "#ffffff";
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

  const switchThemeNavy = () => {
    const newTheme = "navy";
    setTheme(newTheme);
    const newColor = "#0000e7";
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

  const switchThemeEpic = () => {
    const newTheme = "epic";
    setTheme(newTheme);
    const newColor = "#bfef45";
    setParticleColor(newColor);
    console.log({ newColor });
  };

  const switchThemeBG = () => {
    const newBG = "bg";
    setBG(newBG);
  };

  const switchThemeNOBG = () => {
    const newBG = "nobg";
    setBG(newBG);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bg", bg);
  }, [theme, bg]);

  console.log({ theme });

  return (
    <section>
      <div className="reveal-eye">
        <div className="fab-container">
          <button className="bg-eye" onClick={switchThemeBG} />
          <Fab className="fab-reveal" size="medium" aria-label="add">
            <DarkModeIcon />
            <div className="theme-buttons">
              <button className="white-eye eye" onClick={switchThemeWhite} />
              <button className="yellow-eye eye" onClick={switchThemeYellow} />
              <button className="blood-eye eye" onClick={switchThemeBlood} />
              <button className="red-eye eye" onClick={switchThemeRed} />
              <button
                className="magenta-eye eye"
                onClick={switchThemeMagenta}
              />
              <button className="purple-eye eye" onClick={switchThemePurple} />
              <button className="violet-eye eye" onClick={switchThemeViolet} />
              <button className="navy-eye eye" onClick={switchThemeNavy} />
              <button className="blue-eye eye" onClick={switchThemeBlue} />
              <button className="ocean-eye eye" onClick={switchThemeOcean} />
              <button className="green-eye eye" onClick={switchThemeGreen} />
              <button className="epic-eye eye" onClick={switchThemeEpic} />
            </div>
          </Fab>
          <button className="bg-eye" onClick={switchThemeNOBG} />
        </div>
      </div>
      <Particlesview particleColor={particleColor} />
    </section>
  );
}

export default Theme;
