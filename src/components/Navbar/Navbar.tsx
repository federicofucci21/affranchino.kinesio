import style from "./Navbar.module.css";
import { navBarLinks } from "../../assets/constants/navBarLinks";
import logo from "../../assets/IMG/logo.jpeg"

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

  return (
    <nav className={style.nav}>
      <a className={style.logo} href={landingRoute}>
        <img src={logo} alt="LOGO" />
      </a>
      <div className={style.menu1}>
        <div className={style.menu}> {mapLinks(navBarLinks)} </div>
      </div>
    </nav>
  );
};
