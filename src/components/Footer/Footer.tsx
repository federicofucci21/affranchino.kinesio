import { Copyright } from "./Copyrights";
import style from "./Footer.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "../../assets/IMG/logo.jpeg"
import { useLocation } from "react-router-dom";

export function Footer() {

  const location = useLocation();
  console.log("LOCATIONPath", location.pathname)
  const hidden = location.pathname
  console.log(hidden==="/")

  return (
    <div className={hidden==="/"?style.footerHidden : style.footer}>
      <section className={style.section1}>
        <section>
          <div>
            <h1>AFFRANCHINO.KINESIO</h1>
          </div>
          <a className={style.logo} href="/">
            <img src={logo} alt="LOGO" />
          </a>
          <div className={style.social}>
            <div className={style.redes}>
              <a
                href="https://www.facebook.com/BacoFusion/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className={style.socialIcon} />
              </a>
              <a
                href="https://www.instagram.com/bacofusion/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className={style.socialIcon} />
              </a>
            </div>
          </div>
        </section>
        <Copyright />
      </section>
    </div>
  );
}
