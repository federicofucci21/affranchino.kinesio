import SebaFrente from "../../assets/IMG/SebaFrente.png";
import style from "./home.module.css";

export default function Home() {

  return (
    <nav className={style.home}>
      <div className={style.text}>
        {" "}
        <h1>Hola, mi nombre es Sebastian</h1>
        <p>
          Hola! soy Sebastián Kinesiólogo de profesión. Con mi experiencia en
          consultorios y clínicas de rehabilitación durante años, he percibido
          que muchos de los tratamientos o un gran porcentaje, no llegan a
          resultados óptimos o se dilatan en duración demorando el tiempo de
          recuperación de la persona. Es por eso que he decidido brindar un
          servicio especializado y personalizado que se adapte a las necesidades
          de cada persona. Estoy convencido que de esta forma de trabajo se
          aumentan las probabilidades de éxito del tratamiento propuesto para
          solucionar el problema que se busca resolver. Te invito a que conozcas
          los servicios que estoy brindando y si alguno de ellos es el adecuado
          para lo que estés necesitando no dudes consultarme.
        </p>
      </div>
      <div>
        <img className={style.img} src={SebaFrente} alt={"IMAGEN"} />
      </div>
    </nav>
  );
}
