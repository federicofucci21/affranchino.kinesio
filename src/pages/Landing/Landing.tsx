import style from "./Landing.module.css"
import seba from "../../assets/IMG/Seba.png"

export default function LandingPage() {

    return (
      <div className={style.landing}>
        <div className={style.imgDiv}>
          <img src={seba} alt="img not found" />
        </div>
      </div>
    )
  }
