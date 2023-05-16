import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
import style from "./serviceCard.module.css"
import { serviceArrayDetail } from "../../../assets/constants/serviceArray";

export default function Calistenia() {

  return (
    <nav className={style.nav1}>
        <CardServiceDetail title={serviceArrayDetail.calistenia.tittle} img={serviceArrayDetail.calistenia.img} description={serviceArrayDetail.calistenia.description}/>
    </nav>
  );
}