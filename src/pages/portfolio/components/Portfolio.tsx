import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { Container } from "@mui/material";
import scrollToElement from "scroll-to-element";
import ContactForm from "../../contact/components/ContactForm";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import NavBar from "../../nav/components/NavBar";
import LandingPage from "../../landing/components/LandingPage";
import background from "../images/jc-gellidon-EH9f0TI5wco-unsplash.jpg";
import Footer from "../../_misc/components/Footer";

const Portfolio: React.FC = (): JSX.Element => {
  const [showNav, setShowNav] = useState(false);
  const [activePosition, setActivePosition] = useState("home");

  useEffect((): void => {
    const { hash } = window.location;
    if (hash) {
      scrollToElement(hash);
      history.replaceState(null, null, " ");
    }
  }, []);

  const onScroll = (): void => {
    const home = document.getElementById("landing-page");
    const about = document.getElementById("about-me");
    const work = document.getElementById("current-work");
    const contact = document.getElementById("contact-form");

    if (contact.getBoundingClientRect().top <= 0) {
      return setActivePosition("contact");
    }
    if (work.getBoundingClientRect().top <= 0) {
      return setActivePosition("portfolio");
    }
    if (about.getBoundingClientRect().top <= 0) {
      setShowNav(true);
      return setActivePosition("about");
    }
    if (home.getBoundingClientRect().bottom >= 0) {
      setShowNav(false);
      return setActivePosition("home");
    }
  };

  useEffect((): (() => void) => {
    window.addEventListener("scroll", onScroll);
    return (): void => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="portfolio__main-container">
      <LandingPage setActive={(): void => setActivePosition("about")} />
      {showNav ? (
        <Headroom>
          <NavBar home color="white" active={activePosition} />
        </Headroom>
      ) : (
        <div className="headroom" id="portfolio-nav">
          <NavBar home color="white" active={activePosition} />
        </div>
      )}

      <div className="content-container">
        <AboutMe />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
