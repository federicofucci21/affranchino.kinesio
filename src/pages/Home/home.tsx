// import { Photo } from "../../components/photo/photo";
import kinesio from "../../assets/IMG/kinesio.jpg";
import style from "./home.module.css";

export default function Home() {
  return (
    <nav className={style.home}>
      <div className={style.text}>
        {" "}
        <h1>Hola, mi nombre es Sebastian</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
          dictumst, convallis facilisi suspendisse malesuada varius erat id
          lobortis suscipit, vestibulum tellus magna condimentum proin vivamus
          tortor ultricies. Facilisis sollicitudin venenatis eros elementum et
          metus suscipit nunc facilisi ligula hendrerit enim lacinia, magna nisi
          luctus senectus fusce ad molestie leo sed sem arcu. Parturient
          dignissim convallis lectus primis vitae ac habitasse natoque dui, est
          non vehicula senectus cursus duis quam viverra potenti vestibulum,
          volutpat sociis sollicitudin blandit dictum morbi dictumst phasellus.
          Laoreet cum consequat vehicula nascetur luctus curabitur dui, etiam
          fringilla id at massa facilisi, nulla vel sagittis tortor aliquet
          inceptos. A turpis gravida molestie laoreet curabitur metus conubia
          netus, leo interdum donec ornare enim nam tortor class placerat,
          posuere viverra risus ultrices litora ac primis. Sem laoreet aliquam
          condimentum faucibus conubia facilisi mollis lacinia duis velit
          nascetur, cum arcu ad senectus rhoncus ultricies litora felis sagittis
          suspendisse ornare, sed tempor porttitor egestas ridiculus posuere
          euismod nostra nullam dignissim.
        </p>
      </div>
      <div>
        <img className={style.img} src={kinesio} alt={"IMAGEN"} />
      </div>
    </nav>
  );
}
