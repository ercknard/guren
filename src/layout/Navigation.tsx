/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  {
    return (
      <nav id="menu" className="main-navigation">
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
                className={`nomo ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                ABOUT ME
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${pathname === "/skills" ? "active" : ""}`}
                href="/skills"
              >
                SKILLS
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${
                  pathname === "/experiences" ? "active" : ""
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
                className={`nomo ${pathname === "/projects" ? "active" : ""}`}
                href="/projects"
              >
                PROJECTS
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${pathname === "/feedback" ? "active" : ""}`}
                href="/feedback"
              >
                FEEDBACK
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`nomo ${pathname === "/contact" ? "active" : ""}`}
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
