import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
import style from "./serviceCard.module.css"
import { serviceArrayDetail } from "../../../assets/constants/serviceArray";

export default function Rpg() {

  return (
    <nav className={style.nav1}>
        <CardServiceDetail title={serviceArrayDetail.rpg.tittle} img={serviceArrayDetail.rpg.img} description={serviceArrayDetail.rpg.description}/>
    </nav>
  );
}