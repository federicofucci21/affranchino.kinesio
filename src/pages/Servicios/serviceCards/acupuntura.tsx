import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
// import style from "./CardService.module.css"
import { serviceArrayDetail } from "../../../assets/constants/serviceArray";

export default function Acupuntura() {

  return (
    <div>
        <CardServiceDetail title={serviceArrayDetail.acupuntura.tittle} img={serviceArrayDetail.acupuntura.img} description={serviceArrayDetail.acupuntura.description}/>
    </div>
  );
}