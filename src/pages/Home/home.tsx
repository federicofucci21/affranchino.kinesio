import SebaFrente from "../../assets/IMG/SebaFrente.png";
import style from "./home.module.css";

export default function Home() {
  return (
    <nav className={style.home}>
      <div className={style.text}>
        {" "}
        <h1>Hola, mi nombre es Sebastian</h1>
        <p>
          Con mi experiencia en consultorios y
          clínicas de rehabilitación como kinesiólogo durante años he percibido
          que; muchos de los tratamientos brindados en estas instituciones no
          llegan a resultados óptimos o se dilatan en el tiempo, demorando así
          la recuperación de la persona. Una de las principales causas de estos
          fracasos terapéuticos es la falta de tiempo que dispone el profesional
          con el paciente por atender a varias persona a la vez, muchas veces
          obligado a aplicar protocolos terapéuticos generalizados que pasan por
          alto la individualidad de cada paciente, disminuyendo así la eficacia
          y eficiencia de los tratamientos. Es por eso que he decidido brindar
          una atención ESPECIALIZADA y PERSONALIZADA, que se adapte a las
          necesidades de cada persona. Estoy convencido que de esta forma de
          trabajo aumentan las probabilidades de éxito del tratamiento propuesto
          para solucionar el problema que se busca resolver y muchas veces en un
          periodo de tiempo mas corto. Te invito a que conozcas los servicios
          que estoy brindando y si alguno de ellos es el adecuado para lo que
          estés necesitando no dudes en consultarme.
        </p>
      </div>
      <div>
        <img className={style.img} src={SebaFrente} alt={"IMAGEN"} />
      </div>
    </nav>
  );
}
