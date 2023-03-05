import { useState, useEffect } from "react";
import RenderMovie from "../components/RenderMovie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    // useEffect(() => {
    //     fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    //         .then((response) => response.json())
    //         .then((json) => {
    //             setMovies(json.data.movies);
    //             setLoading(false);
    //         });
    // }, [])
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>{movies.map((movie) => (
            <RenderMovie
                key={movie.id}
                id={movie.id}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
            />
            ))}</div>}
        </div>
    );
}

export default Home;
