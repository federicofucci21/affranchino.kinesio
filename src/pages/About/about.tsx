import style from "./about.module.css";
import sebaloco from "../../assets/IMG/Sebaloco.png";
import { studies, courses, work_experience } from "../../assets/constants/cv";
import "./about.css";

export default function About() {


  // button.forEach((e, i) => {
  //   button[i].addEventListener("click", () => {
  //     button.forEach((e, i) => {
  //       button[i].classList.remove("active");
  //       pestañas[i].classList.remove("active");
  //     });

  //     button[i].classList.add("active");
  //     pestañas[i].classList.add("active");
  //   });
  // });
  // console.log("pestañas", pestañas);
  // console.log("BUTTONS", button);

  function button_active(id: number){
    const button = document.querySelectorAll(".button");
    const pestañas = document.querySelectorAll(".pestañas");
    button.forEach((_e, i) => {
      button[i].classList.remove("active");
      pestañas[i].classList.remove("active");
    });

    button[id].classList.add("active");
    pestañas[id].classList.add("active");

  }

  return (
    <nav className={style.about}>
      <div className={style.divAbout}>
        <section className={style.header}>
          {/* <div>
            <img src={sebaloco} alt="IMG not found" />
          </div> */}
          <h2>Lic. Sebastián Affranchino</h2>
          <h4>M.N. 15463</h4>
        </section>
        <div className="buttonDiv">
          <div id="0" onClick={()=>{button_active(0)}} className="button">Preparación Academica</div>
          <div id="1" onClick={()=>{button_active(1)}} className="button">Formación Profesional</div>
          <div id="2" onClick={()=>{button_active(2)}} className="button">Experiencia Laboral</div>
        </div>
        <section className={style.scroll}>
          <div className="pestañas">
            <h1>Preparación Academica</h1>
            <div>
              {studies.map((e) => (
                <div className={style.workExperience}>
                  <h5>{e.name}</h5>
                  <h5>{e.date}</h5>
                  <h5>{e.university}</h5>
                  <h5>{e.city}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="pestañas">
            <h1>Formación Profesional</h1>
            <div>
              {courses.map((e) => (
                <div className={style.workExperience}>
                  <h5>{e.name}</h5>
                  <h5>{e.date}</h5>
                  <h5>{e.university}</h5>
                  <h5>{e.city}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="pestañas">
            <h1>Experiencia Laboral</h1>
            <div>
              {work_experience.map((e) => (
                <div className={style.workExperience}>
                  <h5>Institución: {e.institution}</h5>
                  <h5>Puesto: {e.puesto}</h5>
                  <h5> Fecha: {e.date}</h5>
                  <h5>Area: {e.area}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}

// export default function About() {
//   return (
//     <nav className={style.about}>
//       <div className={style.divAbout}>
//         <section className={style.header}>
//           <div>
//             <img src={sebaloco} alt="IMG not found" />
//           </div>
//           <h2>Lic. Sebastián Affranchino</h2>
//           <h4>M.N. 15463</h4>
//         </section>
//         <section className={style.scroll}>
//           <div className={style.studies}>
//               <h1>Preparación Academica</h1>
//             <div>
//               {studies.map((e) => (
//                 <li><h5>{e.name}</h5><h5>{e.date}</h5><h5>{e.university}</h5><h5>{e.city}</h5></li>
//               ))}
//             </div>
//           </div>
//           <div className={style.courses}>
//               <h1>Formación Profesional</h1>
//             <div>
//               {courses.map((e) => (
//                 <li><h5>{e.name}</h5><h5>{e.date}</h5><h5>{e.university}</h5><h5>{e.city}</h5></li>
//               ))}
//             </div>
//           </div>
//           <div className={style.courses}>
//               <h1>Experiencia Laboral</h1>
//             <div>
//               {work_experience.map((e) => (
//                 <li><h5>Institución: {e.institution}</h5><h5>Puesto: {e.puesto}</h5><h5> Fecha: {e.date}</h5><h5>Area: {e.area}</h5></li>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </nav>
//   );
// }
