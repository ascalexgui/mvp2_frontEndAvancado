import { Link } from "react-router-dom";

export default function Item(props) {
    const viagem = props.viagem

    return (
        <article className="viagem">
            <img src={viagem.image} alt="viagem" />
            <Link to={`/viagem/${viagem.id}`} state={{ p: viagem }}>
                <span className="name-viagem">{viagem.title} - {viagem.dataviagem}</span>
            </Link>
        </article>
    );
} 