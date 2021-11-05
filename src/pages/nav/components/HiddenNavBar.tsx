import { useEffect, useState, FC } from "react";
import { HiddenNavProps } from "../interfaces/navBar.i";
import NavBar from "./NavBar";

const HiddenNavBar: FC<HiddenNavProps> = ({
  color,
  navBackground,
  navColor,
}): JSX.Element => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const navBurger = document.getElementById("nav-burger");
    navBurger.style.color = color;
  }, []);

  const onOpenNav = (): void => {
    const navBurger = document.getElementById("nav-burger");
    navBurger.classList.remove("animate__pulse", "animate__infinite");
    navBurger.classList.add("animate__fadeOut");

    setTimeout((): void => {
      setShowNav(true);
    }, 300);
  };

  const onCloseNav = (): void => {
    const navBurger = document.getElementById("nav-burger");
    navBurger.classList.remove("animate__fadeOut");
    navBurger.classList.add("animate__pulse", "animate__infinite", "animate__fadeIn");
    setTimeout((): void => {
      navBurger.classList.remove("animate__fadeIn");
      setShowNav(false);
    }, 300);
  };

  return (
    <div className="hidden-nav__container">
      <i
        className="fa fa-bars animate__animated animate__pulse animate__infinite nav__burger"
        role="button"
        id="nav-burger"
        tabIndex={0}
        onClick={onOpenNav}
      />
      {showNav && (
        <div className="animate__animated animate__slideInDown">
          <NavBar
            closeNav={onCloseNav}
            color={color}
            navBackground={navBackground}
            navColor={navColor}
          />
        </div>
      )}
    </div>
  );
};

export default HiddenNavBar;
