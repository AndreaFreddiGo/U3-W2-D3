import { Component } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import SingleMovie from './SingleMovie'

class NetflixRow1 extends Component {
  state = {
    movies: [],
    isLoading: true,
  }

  // creo la funzione di fetch per il recupero dei film
  getMovies = () => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c286f1c6&s=Harry Potter')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei film')
        }
      })

      .then((arrayOfMovies) => {
        console.log(arrayOfMovies.Search)
        this.setState({ movies: arrayOfMovies.Search, isLoading: false })
      })

      .catch((err) => {
        console.log(err)
        this.setState({
          isLoading: false,
        })
      })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row m-2">
              {this.state.isLoading && (
                <Spinner
                  className=" mx-auto"
                  animation="border"
                  role="status"
                  variant="danger"
                ></Spinner>
              )}
              <SingleMovie array={this.state.movies.slice(0, 6)} />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row m-2">
              <SingleMovie array={this.state.movies.slice(-6)} />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}

export default NetflixRow1