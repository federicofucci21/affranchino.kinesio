import { Copyright } from "./Copyrights";
import style from "./Footer.module.css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
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
                href="https://api.whatsapp.com/send?phone=5491123308733&text=Hola,%20quisiera%20consultar%20sobre%20"
                id="btn-wsp"
                target="_black"
              >
                <BsWhatsapp className={style.socialIcon} />
              </a>
              <a
                href="https://www.instagram.com/affranchino.kinesio/"
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
