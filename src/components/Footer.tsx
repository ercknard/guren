import React from "react";
import { Icon } from "semantic-ui-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  const d = new Date();
  return (
    <section className="main-footer">
      <div className="secondary-footer to-width to-center">
        <div className="main-footer-logo">
          <Image
            className="participants-main-logo-filter"
            alt="participants logo"
            src="/static/images/logos/aerpym.png"
            height={64}
            width={64}
          />
          <span className="footer-main-title">
            {" "}
            <b>AerCrypt.net</b>
          </span>
        </div>
        <hr className="to-hr" />
        <div className="footer-navigation">
          <span>
            <a href="/policy/terms">Terms & Conditions</a>
          </span>
          <span> | </span>
          <span>
            <a href="/policy/privacy">Privacy</a>
          </span>
          <span> | </span>
          <span>
            <a href="/policy/cookie">Cookies</a>
          </span>
        </div>
        <div className="footer-links">
          <div className="footer-div-size">
            <h3 className="footer-links-title"> AerCrypt Project </h3>
            <div className="aercrypt-info">
              The <b className="highlight">AerCrypt</b> is a modifiable handheld
              crypto wallet that can be used to interact with Web3 based dapps
              including NFTs, blockchain games, and many more.
            </div>
            <div className="to-flex medias">
              <b className="highlight to-format to-gap medias-mobile">
                Socials: {"        "}
                <Link
                  legacyBehavior
                  href="https://x.com/AerCrypt?t=FyS6YnPnFl_5nrcrxM7_4w&s=09"
                  passHref
                >
                  <a>
                    <Icon name="twitter" size="large" />{" "}
                    <b className="to-color-media"> @AerCrypt </b>
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://discord.com/invite/fXUPqKs5"
                  passHref
                >
                  <a>
                    <Icon
                      className="discord-logo"
                      name="discord"
                      size="large"
                    />{" "}
                    <b className="to-color-media"> AerCrypt Project </b>
                  </a>
                </Link>
              </b>
            </div>
          </div>
          <div className="footer-div-size">
            <h3 className="footer-links-title"> Organizations </h3>
            <div className="participants-logo">
              <span className="tooltip">
                <Image
                  className="participants-logo-filter"
                  alt="participants logo"
                  src="/static/images/logos/aerd.png"
                  height={64}
                  width={64}
                />
                <span className="tooltiptext">Aerify.Digital</span>
              </span>
              <span className="tooltip">
                <Image
                  className="participants-logo-filter"
                  alt="participants logo"
                  src="/static/images/logos/flame.png"
                  height={64}
                  width={64}
                />
                <span className="tooltiptext">PyroPets</span>
              </span>
              <span className="tooltip">
                <Image
                  className="participants-logo-filter"
                  alt="participants logo"
                  src="/static/images/logos/metrix.png"
                  height={64}
                  width={64}
                />
                <span className="tooltiptext">Metrix</span>
              </span>
              <span className="tooltip">
                <Image
                  className="participants-logo-filter"
                  alt="participants logo"
                  src="/static/images/logos/CT.webp"
                  height={64}
                  width={64}
                />
                <span className="tooltiptext">Cryptech Services</span>
              </span>
            </div>
          </div>
          <div>
            <h3 className="footer-links-title"> Useful Links </h3>
            <ul className="before-logo-links">
              <li>
                <a href="https://metrixcoin.com/">MetrixCoin Offical Website</a>
              </li>
              <li>
                <a href="https://explorer.metrixcoin.com/">
                  Metrix Block Explorer
                </a>
              </li>
              <li>
                <a href="https://testnet-explorer.metrixcoin.com/">
                  Metrix Block Explorer - TestNet
                </a>
              </li>
              <li>
                <a href="https://metrix.tips/">Metrix Network Health</a>
              </li>
              <li>
                <a href="https://aerify.digital/">Aerify.Digital</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tertiary-footer">
        Copyright © {`${process.env.NEXT_PUBLIC_COPYRIGHT_YEAR}`}
        {d.getFullYear() !== Number(process.env.NEXT_PUBLIC_COPYRIGHT_YEAR)
          ? `-${d.getFullYear()} `
          : " "}{" "}
        <span className="divider-mobile">|</span>
        <a
          className="text-motion"
          rel="noreferrer"
          href={`${process.env.NEXT_PUBLIC_COPYRIGHT_LINK}`}
          target="_blank"
        >
          {`${process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER}`}{" "}
        </a>{" "}
        <span className="divider-mobile">|</span>{" "}
        <span>All Rights Reserved.</span>
      </div>
    </section>
  );
}
