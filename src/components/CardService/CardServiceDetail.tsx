import style from "./CardServiceDetail.module.css"

export default function CardServiceDetail({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
  description: string[];
}) {

  return (
    <div className={style.cardDiv}>
        <section className={style.imgDiv}>
            <img src={img} alt="img not found" />
        </section>
        <section className={style.titleSection}>
            <h3 className={style.tittle}>{title.toUpperCase()}</h3>
            <p className={style.description}>{
            (description.map(e => (<li>{e}</li>)))
            }</p>
        </section>

    </div>
  );
}