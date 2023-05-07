import { useState } from "react";
import style from "./Navbar.module.css";
import { navBarLinks } from "../../assets/constants/navBarLinks";
import logo from "../../assets/IMG/logo.jpeg"
// import { useNavigate } from "react-router-dom";

const mapLinks = (navBarLinks: Array<object>) => {
  return navBarLinks.map((e: any) => {
    return (
      <p className={style.li} key={e.route}>
        <a className={style.link} href={e.route}>
          {e.label}
        </a>
      </p>
    );
  });
};

const landingRoute = "/";

export const Navbar = () => {

  // const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const goTo= (path: string) => {
  //   toggle();
  //   navigate(`${path}`);
  //   window.scroll(0, 0);
  // };

  return (
    <nav className={style.nav}>
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
