import { arrayOf, number, string } from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: number.isRequired,
    coverImg: string.isRequired,
    title: string.isRequired,
    summary: string.isRequired,
    genres: arrayOf(string).isRequired
}
export default Movie;