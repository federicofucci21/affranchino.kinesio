import { serviceArray } from "../../assets/constants/serviceArray";
import CardService from "../../components/CardService/CardService";
import style from "./Servicios.module.css";

export default function Servicios() {
  return (
    <nav className={style.nav}>
      <section className={style.servicios}>
        {serviceArray.length > 1 ? (
          serviceArray.map((e) => (
            <CardService tittle={e.tittle} img={e.img} btnSrc={e.btnSrc} />
          ))
        ) : (
          <h1>LOADING</h1>
        )}
      </section>
    </nav>
  );
}
