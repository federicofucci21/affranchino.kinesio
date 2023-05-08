import style from "./Footer.module.css";

export const Copyright = () => {
  return (
    <h5 className={style.copy}>
      {"Copyright © " + new Date().getFullYear()}{" "}
      <a href="/"></a>. Todos los
      derechos reservados. | Diseñado por {" "}{" "}
      <a       
      href="https://api.whatsapp.com/send?phone=5493416745943&text=Hola,%20quisiera%20consultar%20sobre%20"
      target="_black"
      > CaneDevs</a>
    </h5>
  );
};