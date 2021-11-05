import React from "react";
import { useHistory } from "react-router-dom";
import scrollToElement from "scroll-to-element";

interface LinksProps {
  active: string;
  home: boolean;
}

const Links = ({ active, home }: LinksProps) => {
  const history = useHistory();

  return (
    <>
      <div
        className={active === "home" ? "nav__home--active" : "nav__home"}
        id="home-link"
        role="button"
        tabIndex={0}
        onClick={(): void => {
          if (home) scrollToElement("#landing-page");
          else history.push("/");
        }}
      >
        Home
      </div>
      <div
        className={active === "about" ? "nav__about-me--active" : "nav__about-me"}
        id="about-link"
        role="button"
        tabIndex={0}
        onClick={(): void => {
          if (home) scrollToElement("#about-me");
          else history.push("/#about-me");
        }}
      >
        About Me
      </div>
      <div
        className={active === "portfolio" ? "nav__portfolio--active" : "nav__portfolio"}
        id="portfolio-link"
        role="button"
        tabIndex={0}
        onClick={(): void => {
          if (home) scrollToElement("#current-work");
          else history.push("/#current-work");
        }}
      >
        Portfolio
      </div>
      <div
        className={active === "contact" ? "nav__contact--active" : "nav__contact"}
        id="contact-link"
        role="button"
        tabIndex={0}
        onClick={(): void => {
          if (home) scrollToElement("#contact-form");
          else history.push("/#contact-form");
        }}
      >
        Contact Me
      </div>
    </>
  );
};

export default Links;
