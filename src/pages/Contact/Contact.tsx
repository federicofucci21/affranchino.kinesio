import style from "./Contact.module.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <div className={style.contact}>
      <section>
        <section>
          <div>
            <div>
              <BsInstagram className={style.icon} />
              <h2>Instagram</h2>
            </div>
            <h3>
              <a href="https://www.instagram.com/canemilanesasdesoja/">
                Affranchino.Kinesio
              </a>
            </h3>
          </div>
          <div className={style.divSection}>
            <div>
              <FaPhoneAlt className={style.icon} />
              <h2>Teléfono</h2>
            </div>
            <h3>(54911) 23308733</h3>
          </div>
          <div>
            <div>
              <BsWhatsapp className={style.icon} />
              <h2>Whatsapp</h2>
            </div>
            <h3>
              <a
                href="https://api.whatsapp.com/send?phone=5491123308733&text=Hola,%20quisiera%20consultar%20sobre%20"
                id="btn-wsp"
                target="_black"
              >
                Enviar Mensaje
              </a>
            </h3>
          </div>
        </section>
      </section>
    </div>
  );
}
