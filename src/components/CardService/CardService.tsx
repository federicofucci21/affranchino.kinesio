import { Card } from "antd";
import style from "./CardService.module.css"
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export default function CardService({
  tittle,
  img,
  btnSrc,
}: {
  tittle: string;
  img: string;
  btnSrc: string;
}) {
  console.log('IMG', img);

  const navigate = useNavigate();
  const goTo = () => {
    navigate(`${btnSrc}`);
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={() => goTo()} className={style.cardDiv}>
      <Card
      className={style.card}
        hoverable
        style={{ width: "100%", height: "100%", boxSizing: "border-box" }}
        cover={<img alt="example" src={img} />}
      >
        <Meta title={tittle} description={btnSrc} />
      </Card>
    </div>
  );
}