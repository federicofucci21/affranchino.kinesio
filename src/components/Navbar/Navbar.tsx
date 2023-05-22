import { useState } from "react";
import style from "./Navbar.module.css";
import { linkObjects, navBarLinks } from "../../assets/constants/navBarLinks";
import logo from "../../assets/IMG/logo.jpeg";
import { NavLink, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const landingRoute = "/";

export const Navbar = () => {
  const location = useLocation();

  const hidden = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen", isOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const goTo = () => {
    toggle();
    // navigate(`${path}`);
    window.scroll(0, 0);
  };

  const mapLinks = (navBarLinks: Array<linkObjects>) => {
    return navBarLinks.map((e: linkObjects) => {
      return (
        <p className={style.li} key={e.route}>
          <NavLink
            onClick={() => {
              goTo();
            }}
            className={({ isActive }) =>
              isActive ? style.linkCheck : style.link
            }
            to={e.route}
          >
            {e.label}
          </NavLink>
        </p>
      );
    });
  };

  return (
    <nav className={hidden === "/" ? style.navHidden : style.nav}>
      <a className={style.logo} href={landingRoute}>
        <img src={logo} alt="LOGO" />
      </a>

      {/* boton hamburguesa */}
      <label
        htmlFor="menu"
        onClick={() => toggle()}
        className={style.nav__label}
      >
        <div className={style.btn_hmb} id="btn_hmb">
          <div className={style.linea1} id="linea1"></div>
          <div className={style.linea2} id="linea2"></div>
          <div className={style.linea3} id="linea3"></div>
        </div>
      </label>
      <input
        type="checkbox"
        id="menu"
        checked={isOpen}
        className={style.nav__input}
      />

      <div className={style.menu1}>
        <div className={style.menu}> {mapLinks(navBarLinks)} </div>
      </div>
    </nav>
  );
};
