import Buttonn from "../../components/button/button"
import style from "./Landing.module.css"
import landig_background from "../../assets/IMG/landing_background.jpg"

export default function LandingPage() {

    return (
      <div className={style.landing}>
        <div className={style.img_landing}>
          <img src={landig_background} alt="" />
        </div>
        <div className={style.divText}>
          <h1>- Affranchino.Kinesio -</h1>
        </div>
        <div>
          <Buttonn />
        </div>
        {/* <div className={style.imgDiv}>
          <img src={seba} alt="img not found" />
        </div> */}
      </div>
    )
  }
