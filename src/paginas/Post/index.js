import './Post.css';

import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import foto from "assets/posts/1/capa.png"


export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })



    return (
        <PostModelo
            fotoCapa={foto}
            titulo={post.titulo}>
        
        <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
        </div>

            
        </PostModelo>
    )
}