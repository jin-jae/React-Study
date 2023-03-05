import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json);
        setLoading(true);
    };
    useEffect(() => {
        getMovie();
    }, []);

    console.log(movies);
    return (
        <div>
            {loading ? (
            <div>
                <h1>{movies.data.movie.title}</h1>
                <h2>{movies.data.movie.title_long}</h2>
                <img alt={movies.data.movie.title + " image"}src={movies.data.movie.large_cover_image}></img>
            </div>
            ) : <h1>loading...</h1>}
        </div>
    );
}
export default Detail;
