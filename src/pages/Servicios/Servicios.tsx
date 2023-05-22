import { serviceArray } from "../../assets/constants/serviceArray";
import CardService from "../../components/CardService/CardService";
import style from "./Servicios.module.css";

export default function Servicios() {
  return (
    <nav className={style.nav}>
      <section className={style.servicios}>
        {serviceArray.length > 1 ? (
          serviceArray.map((e) => (
            <CardService id={e.id} tittle={e.tittle} img={e.img}  />
          ))
        ) : (
          <h1>LOADING</h1>
        )}
      </section>
    </nav>
  );
}
