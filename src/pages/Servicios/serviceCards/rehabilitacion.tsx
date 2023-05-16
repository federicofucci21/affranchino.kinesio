import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
import style from "./serviceCard.module.css"
import { serviceArrayDetail } from "../../../assets/constants/serviceArray";

export default function Rehabilitacion() {

  return (
    <nav className={style.nav}>
        <CardServiceDetail title={serviceArrayDetail.rehabilitacion.tittle} img={serviceArrayDetail.rehabilitacion.img} description={serviceArrayDetail.rehabilitacion.description}/>
    </nav>
  );
}