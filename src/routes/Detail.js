import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, [])
    
    return (
        loading 
        ? <h1>Loading...</h1> 
        : <>
            <h1>{movie.title}</h1>
            <p>
                <span>{movie.year}</span>&nbsp;
                <span>{movie.rating}</span>&nbsp;
                <span>{movie.runtime}</span>&nbsp;
                <span>{movie.like_count}</span>&nbsp;
                {
                    movie.genres.map((item) => (<span key={item}>{item}&nbsp;</span>))
                }
            </p>
            <div>
                <img src={movie.large_cover_image} alt={movie.title} />
                <p>
                    {movie.description_full}
                </p>
            </div>
        </>
    )
}

export default Detail;