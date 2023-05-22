import { Link } from "react-router-dom";
import style from "./Landing.module.css";

export default function LandingPage() {
  return (
    <div className={style.landing}>
      <div  className={style.landingDiv}>
        <div className={style.content}>
          <h2>Affranchino.Kinesio</h2>
          <h2>Affranchino.Kinesio</h2>
        </div>
        <Link to={"/home"} className={style.button}>
          <span>INGRESAR</span>
        </Link>
      </div>
    </div>
  );
}

// export default function LandingPage() {

//   return (
//     <div className={style.landing}>
//       <Link to={"/home"} className={style.divText}>
//         <h2>- Affranchino.Kinesio -</h2>
//       </Link>
//     </div>
//   )
// }
