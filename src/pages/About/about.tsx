import style from "./about.module.css";
import sebaloco from "../../assets/IMG/Sebaloco.png";
import { studies, courses, work_experience } from "../../assets/constants/cv";

export default function About() {
  return (
    <nav className={style.about}>
      <div className={style.divAbout}>
        <section className={style.header}>
          <div>
            <img src={sebaloco} alt="IMG not found" />
          </div>
          <h2>Lic. Sebastián Affranchino</h2>
          <h4>M.N. 15463</h4>
        </section>
        <section className={style.scroll}>
          <div className={style.studies}>
              <h1>Preparación Academica</h1>
            <div>
              {studies.map((e) => (
                <li><h5>{e.name}</h5><h5>{e.date}</h5><h5>{e.university}</h5><h5>{e.city}</h5></li>
              ))}
            </div>
          </div>
          <div className={style.courses}>
              <h1>Formación Profesional</h1>
            <div>
              {courses.map((e) => (
                <li><h5>{e.name}</h5><h5>{e.date}</h5><h5>{e.university}</h5><h5>{e.city}</h5></li>
              ))}
            </div>
          </div>
          <div className={style.courses}>
              <h1>Experiencia Laboral</h1>
            <div>
              {work_experience.map((e) => (
                <li><h5>Institución: {e.institution}</h5><h5>Puesto: {e.puesto}</h5><h5> Fecha: {e.date}</h5><h5>Area: {e.area}</h5></li>
              ))}
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}
