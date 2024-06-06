import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function SobreMim() {
    return (
        <PostModelo>
            fotoCapa={fotoCapa}
            titulo="SobreMim"

            <h3 className={styles.subtitulo}>
                Olá, eu sou a Ester!

            </h3>

            <img
            src={fotoSobreMim}
            alt="Foto da Ester Miranda sorrindo"
            className={styles.fotoSobreMim}
            />

        </PostModelo>
    )
}