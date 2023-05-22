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

  // const navigate = useNavigate();
  // const goTo = () => {
  //   navigate(`${id}`);
  //   window.scrollTo(0, 0);
  // };

  // <div onClick={() => goTo()} className={style.cardDiv}>

  return (
    <div className={style.cardDiv}>
      <section>
      <img src={img} alt="img not found" />
      </section>
      <section className={style.titleSection}>
        <h1>{tittle.toUpperCase()}</h1>
        <Link to={`/servicios/${id}`}>Saber Más</Link>
      </section>
    </div>
  );
}

