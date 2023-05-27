import style from "./tarifas.module.css";
import { tarifas } from "../../assets/constants/tarifas";

export default function Tarifas() {
  const tarifasArray = tarifas;

  return (
    <nav className={style.tarifas}>
      {tarifasArray.length > 1 ? (
        tarifasArray.map((e) => (
          <div className={style.card}>
            <h1>{e.title.toUpperCase()}</h1>
            {e.services.length > 1 ? (
              e.services.map((e) => (
                <div>
                  <h3>{e.title}</h3>
                  <h4>{e.items[0]}</h4>
                  <h4>{e.items[1]}</h4>
                </div>
              ))
            ) : (
              <h1>LOADING</h1>
            )}
          </div>
        ))
      ) : (
        <h1>LOADING</h1>
      )}
    </nav>
  );
}

{
  /* <h2>{e.title}</h2>
<h4>{e.items[0]}</h4>
<h4>{e.items[1]}</h4> */
}
