import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RenderMovie( {id, medium_cover_image, title, summary, genres} ) {
    return (
        <div key={id}>
            <img alt={title} src={medium_cover_image} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map(genres => (
                    <li key={genres}>{genres}</li>
                ))}
            </ul>
        </div>
        );
}

RenderMovie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default RenderMovie;
