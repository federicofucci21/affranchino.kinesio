import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
import style from "./serviceCard.module.css"
import { serviceArrayDetail } from "../../../assets/constants/serviceArray";

export default function Acupuntura() {

  return (
    <nav className={style.nav1}>
        <CardServiceDetail title={serviceArrayDetail.acupuntura.tittle} img={serviceArrayDetail.acupuntura.img} description={serviceArrayDetail.acupuntura.description}/>
    </nav>
  );
}

