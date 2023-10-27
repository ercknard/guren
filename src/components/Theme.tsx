"use client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Particlesview from "@/components/Particles";
import { Fab } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Theme() {
  const [particleColor, setParticleColor] = useState("#ffffff");
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [bg, setBG] = useLocalStorage("bg", defaultDark ? "dark" : "light");

  const [gate, setGate] = useLocalStorage(
    "gate",
    defaultDark ? "dark" : "light"
  );

  const [surf, setSurf] = useLocalStorage(
    "surf",
    defaultDark ? "dark" : "light"
  );

  const [dark, setDark] = useLocalStorage(
    "dark",
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

  const switchThemeGates = () => {
    const newgate = "gate";
    setGate(newgate);
  };

  const switchThemeNOGates = () => {
    const newgate = "nogate";
    setGate(newgate);
  };

  const switchThemeSurf = () => {
    const newsurf = "surf";
    setSurf(newsurf);
  };

  const switchThemeNOSurf = () => {
    const newsurf = "nosurf";
    setSurf(newsurf);
  };

  const switchThemeDark = () => {
    const newdark = "dark";
    setDark(newdark);
  };

  const switchThemeNODark = () => {
    const newdark = "nodark";
    setDark(newdark);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bg", bg);
    document.documentElement.setAttribute("data-gate", gate);
    document.documentElement.setAttribute("data-surf", surf);
    document.documentElement.setAttribute("data-dark", dark);
  }, [theme, bg, gate, surf, dark]);

  console.log({ theme });

  return (
    <section>
      <div className="reveal-eye">
        <div className="fab-container">
          <Tooltip title="Dark background ON / OFF" placement="top" arrow>
            <Switch
              checked={dark === "dark"}
              onChange={dark === "dark" ? switchThemeNODark : switchThemeDark}
              defaultChecked={true}
            />
          </Tooltip>
          <Tooltip title="Wallpaper ON / OFF" placement="top" arrow>
            <Switch
              checked={bg === "bg"}
              onChange={bg === "bg" ? switchThemeNOBG : switchThemeBG}
              defaultChecked={true}
            />
          </Tooltip>
          {/* <Tooltip title="Wallpaper ON" placement="top" arrow>
            <button className="bg-eye" onClick={switchThemeBG} />
          </Tooltip>
          <Tooltip title="Wallpaper OFF" placement="top" arrow>
            <button className="bg-eye" onClick={switchThemeNOBG} />
          </Tooltip> */}
          <Fab className="fab-reveal" size="medium" aria-label="add">
            <DarkModeIcon />
            <div className="theme-buttons">
              <Tooltip title="Aquarius" placement="top" arrow>
                <button className="white-eye eye" onClick={switchThemeWhite} />
              </Tooltip>
              <Tooltip title="Pisces" placement="top" arrow>
                <button
                  className="yellow-eye eye"
                  onClick={switchThemeYellow}
                />
              </Tooltip>
              <Tooltip title="Taurus" placement="top" arrow>
                <button className="blood-eye eye" onClick={switchThemeBlood} />
              </Tooltip>
              <Tooltip title="Aries" placement="top" arrow>
                <button className="red-eye eye" onClick={switchThemeRed} />
              </Tooltip>
              <Tooltip title="Gemini" placement="top" arrow>
                <button
                  className="magenta-eye eye"
                  onClick={switchThemeMagenta}
                />
              </Tooltip>
              <Tooltip title="Cancer" placement="top" arrow>
                <button
                  className="purple-eye eye"
                  onClick={switchThemePurple}
                />
              </Tooltip>
              <Tooltip title="Leo" placement="top" arrow>
                <button
                  className="violet-eye eye"
                  onClick={switchThemeViolet}
                />
              </Tooltip>
              <Tooltip title="Libra" placement="top" arrow>
                <button className="navy-eye eye" onClick={switchThemeNavy} />
              </Tooltip>
              <Tooltip title="Virgo" placement="top" arrow>
                <button className="blue-eye eye" onClick={switchThemeBlue} />
              </Tooltip>
              <Tooltip title="Scorpio" placement="top" arrow>
                <button className="ocean-eye eye" onClick={switchThemeOcean} />
              </Tooltip>
              <Tooltip title="Sagittarious" placement="top" arrow>
                <button className="green-eye eye" onClick={switchThemeGreen} />
              </Tooltip>
              <Tooltip title="Capricorn" placement="top" arrow>
                <button className="epic-eye eye" onClick={switchThemeEpic} />
              </Tooltip>
            </div>
          </Fab>
          {/* <Tooltip title="Gate ON" placement="top" arrow>
            <button className="bg-eye" onClick={switchThemeGates} />
          </Tooltip>
          <Tooltip title="Gate OFF" placement="top" arrow>
            <button className="bg-eye" onClick={switchThemeNOGates} />
          </Tooltip> */}
          <Tooltip title="Gate ON / OFF" placement="top" arrow>
            <Switch
              checked={gate === "gate"}
              onChange={gate === "gate" ? switchThemeNOGates : switchThemeGates}
              defaultChecked={true}
            />
          </Tooltip>
          <Tooltip title="Surf ON / OFF" placement="top" arrow>
            <Switch
              checked={surf === "surf"}
              onChange={surf === "surf" ? switchThemeNOSurf : switchThemeSurf}
              defaultChecked={true}
            />
          </Tooltip>
        </div>
        <div className="theme-picked to-hide">
          {" "}
          <Fab className="theme-details" size="small" aria-label="add">
            <QuestionMarkIcon className="to-mask-icon" />
            <div className="theme-details-buttons">
              <div className="DB">Dark Background (Pages only) : </div>
              <div className="CW">Cosmic Wallpaper : </div>
              <div className="TG">Theme Gates : </div>
              <div className="TS">Theme Surf : </div>
            </div>
          </Fab>{" "}
          Theme applied :{" "}
        </div>
      </div>
      <Particlesview particleColor={particleColor} />
    </section>
  );
}

export default Theme;
