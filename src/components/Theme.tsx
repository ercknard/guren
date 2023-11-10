"use client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Particlesview from "@/components/Particles";
import { Fab } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import Button from "@mui/material/Button";

function Theme() {
  const getQueryParam = (name: string): string | null => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
  };

  const setThemeFromQueryParam = () => {
    const themeFromQueryParam = getQueryParam("theme");
    if (themeFromQueryParam) {
      if (themeFromQueryParam === "Pisces") {
        switchThemeYellow();
      } else if (themeFromQueryParam === "Aries") {
        switchThemeRed();
      } else if (themeFromQueryParam === "Taurus") {
        switchThemeBlood();
      } else if (themeFromQueryParam === "Gemini") {
        switchThemeMagenta();
      } else if (themeFromQueryParam === "Cancer") {
        switchThemePurple();
      } else if (themeFromQueryParam === "Aquarius") {
        switchThemeWhite();
      } else if (themeFromQueryParam === "Leo") {
        switchThemeViolet();
      } else if (themeFromQueryParam === "Virgo") {
        switchThemeBlue();
      } else if (themeFromQueryParam === "Libra") {
        switchThemeNavy();
      } else if (themeFromQueryParam === "Scorpio") {
        switchThemeOcean();
      } else if (themeFromQueryParam === "Sagittarius") {
        switchThemeGreen();
      } else if (themeFromQueryParam === "Capricorn") {
        switchThemeEpic();
      }
    }
  };

  useEffect(() => {
    setThemeFromQueryParam();
  }, []);

  const root = document.documentElement;
  const myVariableWithQuotes = getComputedStyle(root)
    .getPropertyValue("--conste")
    .trim();
  const myVariable = myVariableWithQuotes.replace(/^"(.*)"$/, "$1");

  let themeName = myVariable;

  const addQueryParam = (themeName: string | undefined) => {
    let currentUrl = window.location.href;

    const paramExists = currentUrl.includes("theme");

    if (paramExists) {
      currentUrl = currentUrl.replace(/theme=[^&]*/, "theme=" + themeName);
    } else {
      currentUrl +=
        (currentUrl.includes("?") ? "&" : "?") + "theme=" + themeName;
    }

    window.history.pushState({ path: currentUrl }, "", currentUrl);
  };

  useEffect(() => {
    addQueryParam(themeName);
  }, []);

  const [openDB, setOpenDB] = React.useState(false);
  const [openCW, setOpenCW] = React.useState(false);
  const [openTG, setOpenTG] = React.useState(false);
  const [openTS, setOpenTS] = React.useState(false);
  const [openFS, setOpenFS] = React.useState(false);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [particleColor, setParticleColor] = useLocalStorage(
    "particleColor",
    "particleColor"
  );

  const [particleSize, setParticleSize] = useState<number>(0.25);

  const [bg, setBG] = useLocalStorage("bg", "bg");

  const [gate, setGate] = useLocalStorage("gate", "gate");

  const [surf, setSurf] = useLocalStorage("surf", "surf");

  const [dark, setDark] = useLocalStorage("dark", "dark");

  const [full, setFull] = useState("full");

  const switchThemeYellow = () => {
    const newTheme = "yellow";
    setTheme(newTheme);
    const newColor = "#f0d056";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Pisces";
    addQueryParam(themeName);
  };

  const switchThemeRed = () => {
    const newTheme = "red";
    setTheme(newTheme);
    const newColor = "#ff5e5a";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Aries";
    addQueryParam(themeName);
  };

  const switchThemeBlood = () => {
    const newTheme = "blood";
    setTheme(newTheme);
    const newColor = "#f58231";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Taurus";
    addQueryParam(themeName);
  };

  const switchThemeMagenta = () => {
    const newTheme = "magenta";
    setTheme(newTheme);
    const newColor = "#9b3a98";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Gemini";
    addQueryParam(themeName);
  };

  const switchThemePurple = () => {
    const newTheme = "purple";
    setTheme(newTheme);
    const newColor = "#b075f8";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Cancer";
    addQueryParam(themeName);
  };

  const switchThemeWhite = () => {
    const newTheme = "white";
    setTheme(newTheme);
    const newColor = "#ffffff";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Aquarius";
    addQueryParam(themeName);
  };

  const switchThemeViolet = () => {
    const newTheme = "violet";
    setTheme(newTheme);
    const newColor = "#7b8ffc";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Leo";
    addQueryParam(themeName);
  };

  const switchThemeBlue = () => {
    const newTheme = "blue";
    setTheme(newTheme);
    const newColor = "#4389ff";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Virgo";
    addQueryParam(themeName);
  };

  const switchThemeNavy = () => {
    const newTheme = "navy";
    setTheme(newTheme);
    const newColor = "#0000e7";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Libra";
    addQueryParam(themeName);
  };

  const switchThemeOcean = () => {
    const newTheme = "ocean";
    setTheme(newTheme);
    const newColor = "#5cc2e4";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Scorpio";
    addQueryParam(themeName);
  };

  const switchThemeGreen = () => {
    const newTheme = "green";
    setTheme(newTheme);
    const newColor = "#6ef0bc";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Sagittarius";
    addQueryParam(themeName);
  };

  const switchThemeEpic = () => {
    const newTheme = "epic";
    setTheme(newTheme);
    const newColor = "#bfef45";
    setParticleColor(newColor);
    console.log({ newColor });
    const themeName = "Capricorn";
    addQueryParam(themeName);
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
    const newpartSize: number = 0.25;
    setParticleSize(newpartSize);
  };

  const switchThemeNODark = () => {
    const newdark = "nodark";
    setDark(newdark);
    const newpartSize: number = 3;
    setParticleSize(newpartSize);
  };

  const switchThemeFull = () => {
    const newfull = "full";
    setFull(newfull);
  };

  const switchThemeNOFull = () => {
    const newfull = "nofull";
    setFull(newfull);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bg", bg);
    document.documentElement.setAttribute("data-gate", gate);
    document.documentElement.setAttribute("data-surf", surf);
    document.documentElement.setAttribute("data-dark", dark);
    document.documentElement.setAttribute("data-full", full);
  }, [theme, bg, gate, surf, dark, full]);

  console.log({ theme, bg, gate, surf, dark, full });

  const handleClickDB = () => {
    setOpenDB(true);
  };

  const handleClickCW = () => {
    setOpenCW(true);
  };

  const handleClickTG = () => {
    setOpenTG(true);
  };

  const handleClickTS = () => {
    setOpenTS(true);
  };

  const handleClickFS = () => {
    setOpenFS(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenDB(false);
    setOpenCW(false);
    setOpenTG(false);
    setOpenTS(false);
    setOpenFS(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <div className="modes" />
      <div className="modes-two" />
      <div className="modes-three" />
      <Snackbar
        open={openDB}
        autoHideDuration={1000}
        onClose={handleClose}
        message={dark === "dark" ? "Dark Filter is ON" : "Dark Filter is OFF"}
        action={action}
      />
      <Snackbar
        open={openCW}
        autoHideDuration={1000}
        onClose={handleClose}
        message={
          bg === "bg" ? "Cosmic Wallpaper is ON" : "Cosmic Wallpaper is OFF"
        }
        action={action}
      />
      <Snackbar
        open={openTG}
        autoHideDuration={1000}
        onClose={handleClose}
        message={
          gate === "gate"
            ? "Theme Gates/Moon are ON"
            : "Theme Gates/Moon are OFF"
        }
        action={action}
      />
      <Snackbar
        open={openTS}
        autoHideDuration={1000}
        onClose={handleClose}
        message={surf === "surf" ? "Theme Surf is ON" : "Theme Surf is OFF"}
        action={action}
      />
      <Snackbar
        open={openFS}
        autoHideDuration={1000}
        onClose={handleClose}
        message={full === "full" ? "View mode is OFF" : "View mode is ON"}
        action={action}
      />
      <div className="reveal-eye">
        <div className="fab-container to-hide">
          <Tooltip title="Dark Filter ON / OFF" placement="top" arrow>
            <Switch
              onClick={handleClickDB}
              checked={dark === "dark"}
              onChange={dark === "dark" ? switchThemeNODark : switchThemeDark}
            />
          </Tooltip>
          <Tooltip title="Cosmic Wallpaper ON / OFF" placement="top" arrow>
            <Switch
              onClick={handleClickCW}
              checked={bg === "bg"}
              onChange={bg === "bg" ? switchThemeNOBG : switchThemeBG}
            />
          </Tooltip>
          <Fab className="fab-reveal" size="medium" aria-label="add">
            <DarkModeIcon />
            <div className="theme-buttons">
              <Tooltip title="Aquarius" placement="top" arrow>
                <Button className="white-eye eye" onClick={switchThemeWhite} />
              </Tooltip>
              <Tooltip title="Pisces" placement="top" arrow>
                <Button
                  className="yellow-eye eye"
                  onClick={switchThemeYellow}
                />
              </Tooltip>
              <Tooltip title="Taurus" placement="top" arrow>
                <Button className="blood-eye eye" onClick={switchThemeBlood} />
              </Tooltip>
              <Tooltip title="Aries" placement="top" arrow>
                <Button className="red-eye eye" onClick={switchThemeRed} />
              </Tooltip>
              <Tooltip title="Gemini" placement="top" arrow>
                <Button
                  className="magenta-eye eye"
                  onClick={switchThemeMagenta}
                />
              </Tooltip>
              <Tooltip title="Cancer" placement="top" arrow>
                <Button
                  className="purple-eye eye"
                  onClick={switchThemePurple}
                />
              </Tooltip>
              <Tooltip title="Leo" placement="top" arrow>
                <Button
                  className="violet-eye eye"
                  onClick={switchThemeViolet}
                />
              </Tooltip>
              <Tooltip title="Libra" placement="top" arrow>
                <Button className="navy-eye eye" onClick={switchThemeNavy} />
              </Tooltip>
              <Tooltip title="Virgo" placement="top" arrow>
                <Button className="blue-eye eye" onClick={switchThemeBlue} />
              </Tooltip>
              <Tooltip title="Scorpio" placement="top" arrow>
                <Button className="ocean-eye eye" onClick={switchThemeOcean} />
              </Tooltip>
              <Tooltip title="Sagittarious" placement="top" arrow>
                <Button className="green-eye eye" onClick={switchThemeGreen} />
              </Tooltip>
              <Tooltip title="Capricorn" placement="top" arrow>
                <Button className="epic-eye eye" onClick={switchThemeEpic} />
              </Tooltip>
            </div>
          </Fab>
          <Tooltip title="Theme Gates/Moon ON / OFF" placement="top" arrow>
            <Switch
              onClick={handleClickTG}
              checked={gate === "gate"}
              onChange={gate === "gate" ? switchThemeNOGates : switchThemeGates}
            />
          </Tooltip>
          <Tooltip title="Theme Surf ON / OFF" placement="top" arrow>
            <Switch
              onClick={handleClickTS}
              checked={surf === "surf"}
              onChange={surf === "surf" ? switchThemeNOSurf : switchThemeSurf}
            />
          </Tooltip>
        </div>
        <div className="theme-picked to-hide">
          {" "}
          <Fab className="theme-details" size="small" aria-label="add">
            <QuestionMarkIcon className="to-mask-icon" />
            <div className="theme-details-buttons">
              <div className="DB">Dark Filter : </div>
              <div className="CW">Cosmic Wallpaper : </div>
              <div className="TG">Theme Gates/Moon : </div>
              <div className="TS">Theme Surf : </div>
            </div>
          </Fab>{" "}
          Current theme :{" "}
        </div>
        <div className="theme-picked-fullscreen to-hide">
          <Tooltip title="Toggle View" placement="top" arrow>
            <Checkbox
              size="medium"
              onClick={handleClickFS}
              icon={<FullscreenExitIcon fontSize="large" />}
              checkedIcon={<FullscreenIcon fontSize="large" />}
              checked={full === "full"}
              onChange={full === "full" ? switchThemeNOFull : switchThemeFull}
            />
          </Tooltip>
        </div>
      </div>
      <Particlesview
        particleColor={particleColor}
        particleSize={particleSize}
      />
      {/* <Equalizer /> */}
    </div>
  );
}

export default Theme;
