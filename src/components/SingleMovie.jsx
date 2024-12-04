import { Link } from 'react-router-dom'

const SingleMovie = (props) => {
  return (
    <>
      {props.array.map((movie) => (
        <Link
          to={'/MovieDetails/' + movie.imdbID}
          className="col-6 col-md-3 col-lg-2 px-2"
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt={movie.Title} className="w-100 h-100" />
        </Link>
      ))}
    </>
  )
}

export default SingleMovie
