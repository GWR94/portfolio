import React from "react";
import scrollToElement from "scroll-to-element";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import { NavBarProps, NavBarState } from "../interfaces/navBar.i";
import logo from "../images/logo.png";

/**
 * TODO
 * [ ] Fix X so it fits inline with navbar toggler
 * [ ] Change classes so it puts the hex color in rather than __black/__white
 */

class NavBar extends React.Component<NavBarProps, NavBarState> {
  public readonly state: NavBarState = {
    isOpen: false,
    hiddenNav: false,
    collapsed: window.innerWidth <= 767,
  };

  private navBarRef = React.createRef<HTMLDivElement>();
  private closeBtnRef = React.createRef<HTMLImageElement>();
  private homeLink = React.createRef<HTMLParagraphElement>();
  private portfolioLink = React.createRef<HTMLParagraphElement>();
  private skillsLink = React.createRef<HTMLParagraphElement>();
  private aboutMeLink = React.createRef<HTMLParagraphElement>();

  public componentWillMount(): void {
    const { closeNav } = this.props;
    if (closeNav) this.setState({ hiddenNav: true });
  }

  public componentDidMount(): void {
    const { color, closeNav } = this.props;

    this.homeLink.current.style.color = color;
    this.portfolioLink.current.style.color = color;
    this.skillsLink.current.style.color = color;
    this.aboutMeLink.current.style.color = color;

    window.addEventListener("resize", this.onWindowResize);

    if (closeNav) {
      this.closeBtnRef.current.style.color = color;
    }
  }

  public componentWillUnmount(): void {
    window.removeEventListener("resize", this.onWindowResize);
  }

  private onWindowResize = (): void =>
    this.setState({ collapsed: window.innerWidth <= 767 });

  private onNavToggle = (): void => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  private onCloseButton = (): void => {
    const { closeNav } = this.props;
    const nav = this.navBarRef.current;
    const closeBtn = this.closeBtnRef.current;

    closeBtn.classList.add("fadeOut");
    setTimeout((): void => {
      nav.classList.add("animated", "slideOutUp");
    }, 500);

    setTimeout((): void => {
      closeNav();
    }, 700);
  };

  public render(): JSX.Element {
    const { isOpen, hiddenNav, collapsed } = this.state;
    const { navBackground, color, active } = this.props;
    return (
      <>
        <div
          className="nav__container"
          ref={this.navBarRef}
          style={{
            borderBottom: collapsed ? `1px solid ${color}` : "",
            borderRadius: collapsed ? "10px" : "",
            background:
              collapsed && isOpen ? `url(${navBackground}) no-repeat fixed center` : "",
          }}
        >
          {hiddenNav && (
            <i
              onClick={this.onCloseButton}
              role="button"
              tabIndex={0}
              className="fa fa-times animated pulse infinite nav__close-button"
              ref={this.closeBtnRef}
            />
          )}
          <Navbar
            className={collapsed && isOpen ? "nav__collapsed" : ""}
            color="faded"
            dark={hiddenNav}
            light={!hiddenNav}
            expand="md"
          >
            <NavLink to="/">
              <img src={logo} alt="JG Web Developer" className="nav__logo" />
            </NavLink>
            <div className="nav__separator" />
            <NavbarToggler
              className={`nav__toggle--${color}`}
              onClick={this.onNavToggle}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <div
                  className={active === "home" ? "nav__home--active" : "nav__home"}
                  role="button"
                  tabIndex={0}
                  ref={this.homeLink}
                  onClick={(): void => scrollToElement(".landing__container")}
                >
                  Home
                </div>
                <div
                  className={
                    active === "portfolio" ? "nav__portfolio--active" : "nav__portfolio"
                  }
                  role="button"
                  tabIndex={0}
                  ref={this.portfolioLink}
                  onClick={(): void => scrollToElement(".content-container")}
                >
                  <p ref={this.portfolioLink} className="nav__link-text">
                    Portfolio
                  </p>
                </div>
                <NavLink
                  className="nav__skills"
                  to="/skills"
                  activeClassName="nav__skills--active"
                >
                  <p ref={this.skillsLink} className="nav__link-text">
                    Skills
                  </p>
                </NavLink>
                <NavLink
                  className="nav__about-me"
                  to="/contact-me"
                  activeClassName="nav__about-me--active"
                >
                  <p ref={this.aboutMeLink} className="nav__link-text">
                    About Me
                  </p>
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default NavBar;
