import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
import style from "./serviceCard.module.css"
import { serviceArrayDetail } from "../../../assets/constants/serviceArray";

export default function Puncion() {

  return (
    <nav className={style.nav}>
        <CardServiceDetail title={serviceArrayDetail.puncion.tittle} img={serviceArrayDetail.puncion.img} description={serviceArrayDetail.puncion.description}/>
    </nav>
  );
}