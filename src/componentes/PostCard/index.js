import { Link } from 'react-router-dom';
import styles from './Post.module.css';


export default function PostCard({ post }) {
    const imagePath = require(`assets/posts/${post.id}/capa.png`)
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                className={styles.capa}
                src={imagePath}
                alt="Imagem de capa do post"
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>

        </div>
    
        </Link>
    )

}