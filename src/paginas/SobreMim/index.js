import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim">

            <h3 className={styles.subtitulo}>
                Olá, eu sou a Ester!

            </h3>

            <img
            src={fotoSobreMim}
            alt="Foto da Ester Miranda sorrindo"
            className={styles.fotoSobreMim}
            />
                <p className={styles.paragrafo}>
                    Oi, tudo bem? Eu sou estudante da Plataforma Impact e estou feliz de te ver por aqui.

                </p>

                <p className={styles.paragrafo}>
                    Minha história com programação começou em agosto de 2023, quando iniciei os estudos atráves da Plataforma em parceria com a Alura. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.

                </p>

                <p className={styles.paragrafo}>
                    Com o passar dos meses, surgiu uma oportunidade de fazer parte da Oracle ONE e assim focar mais nos estudos. Precisei escolher a trilha que mais fazia sentido para mim e no Front End, foi onde me encontrei.
                </p>

                <p className={styles.paragrafo}>
                    Houve duas oportunidades incríveis nesse meio tempo, em me tornar monitora da próxima turma Oracle através da Plataforma e uma oferta de emprego como Assistente DEV, no qual estou super animada para iniciar.

                </p>

                <p className={styles.paragrafo}>
                    O apoio que a Plataforma Impact dá aos alunos, seja com a ajuda de monitoria ou até mesmo o apoio moral, é fundamental para que não aja desistência. São aprendizados difícies e que é preciso ter paciência consigo mesmo e muita disciplina. 
                </p>

                <p className={styles.paragrafo}>
                    Espero que num futuro bem próximo eu consiga ajudar novos alunos, da mesma forma em que os meus jedis me ajudaram e pretendo sempre me manter em movimento nessa área. Conhecimento é um poder que deve ser compartilhado e acessível para todos.
                </p>

        </PostModelo>
    )
}