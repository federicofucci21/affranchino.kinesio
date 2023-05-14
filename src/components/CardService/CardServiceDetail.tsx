import style from "./CardService.module.css"

export default function CardServiceDetail({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
  description: string;
}) {

  return (
    <div className={style.cardDiv}>
        <section className={style.imgDiv}>
            <img src={img} alt="img not found" />
        </section>
        <section>
            <div className={style.tittle}>{title}</div>
            <div className={style.description}>{description}</div>
        </section>

    </div>
  );
}