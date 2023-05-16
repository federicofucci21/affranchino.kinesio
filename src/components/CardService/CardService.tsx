import style from "./CardService.module.css";
import { useNavigate } from "react-router-dom";

export default function CardService({
  tittle,
  img,
  btnSrc,
}: {
  tittle: string;
  img: string;
  btnSrc: string;
}) {
  console.log("IMG", img);

  const navigate = useNavigate();
  const goTo = () => {
    navigate(`${btnSrc}`);
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={() => goTo()} className={style.cardDiv}>
      <section>
      <img src={img} alt="img not found" />
      </section>
      <section className={style.titleSection}>
        <h1>{tittle.toUpperCase()}</h1>
        <a href={btnSrc}>Saber Más</a>
      </section>
    </div>
  );
}

// return (
//   <div onClick={() => goTo()} className={style.cardDiv}>
//     <Card
//     className={style.card}
//       hoverable
//       style={{ width: "100%", height: "100%", boxSizing: "border-box" }}
//       cover={<img alt="example" src={img} />}
//     >
//       <Meta title={tittle} description={btnSrc} />
//     </Card>
//   </div>
// );
