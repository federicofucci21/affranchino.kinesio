import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
import style from "./serviceCard.module.css"
import { serviceArrayDetail } from "../../../assets/constants/serviceArray";

export default function Terapia() {

  return (
    <nav className={style.nav1}>
        <CardServiceDetail title={serviceArrayDetail.terapia.tittle} img={serviceArrayDetail.terapia.img} description={serviceArrayDetail.terapia.description}/>
    </nav>
  );
}