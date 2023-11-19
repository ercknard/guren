/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    return (
      <nav
        id="menu"
        className={`main-navigation ${scrolling ? "scrolling" : ""}`}
      >
        <input type="checkbox" id="responsive-menu" />
        <label></label>
        <div className="nav-blur" />
        <div className="main-sec-nav to-width">
          <div className="navigation-buttons">
            <div className="to-hide-pc">
              <Link href="/">
                <span className="to-flex navigation-text-logo">
                  <b className="to-font-color icon-text navi-icon"></b>
                  {/* <b className="to-font-color text-effect navi-icon">⚔</b> */}
                </span>
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${
                  pathname?.toLowerCase().startsWith("/about") ? "active" : ""
                }`}
                href="/about"
              >
                ABOUT ME
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${
                  pathname?.toLowerCase().startsWith("/skills") ? "active" : ""
                }`}
                href="/skills"
              >
                SKILLS
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${
                  pathname?.toLowerCase().startsWith("/experiences")
                    ? "active"
                    : ""
                }`}
                href="/experiences"
              >
                EXPERIENCES
              </Link>
            </div>
            <Link href="/">
              <span className="to-flex navigation-text-logo to-hide">
                <b className="to-font-color icon-text navi-icon"></b>
                {/* <b className="to-font-color text-effect navi-icon">⚔</b> */}
              </span>
            </Link>
            <div className="the-links up-to">
              <Link
                className={`nomo ${
                  pathname?.toLowerCase().startsWith("/projects")
                    ? "active"
                    : ""
                }`}
                href="/projects"
              >
                PROJECTS
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${
                  pathname?.toLowerCase().startsWith("/cryptech")
                    ? "active"
                    : ""
                }`}
                href="/cryptech"
              >
                CRYPTECH
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${
                  pathname?.toLowerCase().startsWith("/contact") ? "active" : ""
                }`}
                href="/contact"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
