import style from "./CardService.module.css";
import { Link } from "react-router-dom";

export default function CardService({
  id,
  tittle,
  img,
}: {
  id: number,
  tittle: string;
  img: string;
}) {

  return (
    <div className={style.cardDiv}>
      <section>
      <img src={img} alt="img not found" />
      </section>
      <section className={style.titleSection}>
        <h1>{tittle.toUpperCase()}</h1>
        <Link to={`/terapias/${id}`}>Saber Más</Link>
      </section>
    </div>
  );
}

