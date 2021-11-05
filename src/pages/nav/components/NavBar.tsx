import React, { useState, FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, useMediaQuery, createTheme } from "@mui/material";
import { NavBarProps } from "../interfaces/navBar.i";
import logo from "../images/logo.png";
import Links from "./Links";

/*
  TODO
  [ ] Nav toggler color set from navColor
  [x] Remove focused outline on Nav
*/

const NavBar: FC<NavBarProps> = ({
  color,
  closeNav,
  active,
  navBackground,
  home,
  navColor,
}): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const theme = createTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const homeLink = document.getElementById("home-link");
    const portfolioLink = document.getElementById("portfolio-link");
    const contactLink = document.getElementById("contact-link");
    const aboutMeLink = document.getElementById("about-link");
    const closeBtn = document.getElementById("close-btn");

    homeLink.style.color = color;
    portfolioLink.style.color = color;
    contactLink.style.color = color;
    aboutMeLink.style.color = color;

    if (closeNav) {
      closeBtn.style.color = color;
    }
  }, []);

  const onCloseButton = (): void => {
    const nav = document.getElementById("nav-bar");
    const closeBtn = document.getElementById("close-btn");

    closeBtn.classList.add("fadeOut");
    setTimeout((): void => {
      nav.classList.add("animate__animated", "animate__slideOutUp");
    }, 500);

    setTimeout((): void => {
      closeNav();
    }, 700);
  };

  return (
    <>
      <div
        className="nav__container"
        id="nav-bar"
        style={{
          borderBottom: mobile ? `1px solid ${color}` : "",
          borderBottomLeftRadius: mobile ? "10px" : "",
          borderBottomRightRadius: mobile ? "10px" : "",
          background:
            mobile && isOpen && navBackground
              ? `url(${navBackground}) no-repeat fixed center`
              : mobile && isOpen && navColor
              ? navColor
              : "",
        }}
      >
        {closeNav && (
          <i
            onClick={onCloseButton}
            role="button"
            tabIndex={0}
            className="fa fa-times animate__animated animate__pulse animate__infinite nav__close-button"
            id="close-btn"
          />
        )}
        <div className={mobile ? "nav__mobile" : "nav__desktop"}>
          <NavLink to="/">
            <img src={logo} alt="JG Web Developer" className="nav__logo" />
          </NavLink>
          {!mobile ? (
            <>
              <div className="nav__separator" />

              <Links active={active} home={home} />
            </>
          ) : (
            <i
              className={`nav__toggle--${color} fas fa-bars`}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(!isOpen)}
              style={{ color }}
            />
          )}
        </div>
        {mobile && (
          <Collapse in={isOpen}>
            <Links active={active} home={home} />
          </Collapse>
        )}
      </div>
    </>
  );
};

export default NavBar;
