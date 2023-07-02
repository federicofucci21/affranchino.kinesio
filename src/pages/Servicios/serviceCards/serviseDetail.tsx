import CardServiceDetail from "../../../components/CardService/CardServiceDetail";
import style from "./serviceCard.module.css"
import { serviceArray } from "../../../assets/constants/serviceArray";
import { Link, useParams } from "react-router-dom";

export default function SeviceDetail() {

    
    function getService (id: string | undefined) {
        const service = serviceArray.find(e => e.id.toString() === id)
        if(!service){
        return serviceArray[0]
        }
        return service
    }

    const { id } = useParams();

    const service = getService(id)

  return (
    <nav className={style.nav1}>
      <div className={style.back}>
        <Link to="/terapias" className={style.backLink}>Volver</Link>
      </div>
        <CardServiceDetail title={service.tittle} img={service.img} description={service.description}/>
    </nav>
  );
}

