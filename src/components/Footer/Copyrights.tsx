import style from "./Footer.module.css";

export const Copyright = () => {
  return (
    <h5 className={style.copy}>
      {"Copyright © " + new Date().getFullYear()}{" "}
      <a href="/"> Seba.Kinesio</a>. Todos los
      derechos reservados. | Diseñado por{" "}
      <a href="/"> CaneDevs</a>
    </h5>
  );
};