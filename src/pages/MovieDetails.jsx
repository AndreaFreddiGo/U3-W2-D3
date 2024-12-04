import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieDetails = () => {
  const params = useParams()
  console.log('PARAMS', params)

  const goToHomepage = () => {
    navigate('/')
  }

  const [movieObject, setMovieObject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const getMovieData = () => {
    fetch('http://www.omdbapi.com/?apikey=c286f1c6&s&i=' + params.movieId)
      .then((response) => {
        if (response.ok) {
          // proseguo con l'estrazione del JSON
          return response.json()
        } else {
          throw new Error('OMDb ha risposto picche')
        }
      })
      .then((data) => {
        console.log('data', data)
        // qui ci andrà un this.setState()
        setMovieObject(data)
        setIsLoading(false)
        setIsError(false)
      })
      .catch((error) => {
        console.log('errore', error)
        setIsError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <main className="bg-darkest vh-100">
      <Container>
        <Row className="vh-100 justify-content-center align-items-center mt-5">
          <Col className="col-5 mx-0 ">
            {isError && (
              <>
                <Alert variant="danger">Errore nel recupero del film</Alert>
                <Button variant="danger" onClick={goToHomepage}>
                  Torna al menu
                </Button>
              </>
            )}

            {isLoading && (
              <div className="text-center">
                <Spinner animation="border" variant="danger" />
              </div>
            )}

            {!isError && !isLoading && movieObject && (
              <>
                <Card className="m-5 border-0 ">
                  <Card.Img
                    variant="top"
                    src={movieObject.Poster}
                    alt={'immagine di ' + movieObject.Title}
                    className="w-100 h-100"
                  />
                  <Card.Body className=" text-center bg-secondary bg-opacity-25">
                    <Card.Title className=" fs-4">
                      {movieObject.Title}
                    </Card.Title>
                    <Card.Text className="pb-2 border-bottom border-1 border-dark">
                      Directed by: {movieObject.Director}
                    </Card.Text>
                    <Card.Text>Released in: {movieObject.Year}</Card.Text>
                    <Card.Text>Genre: {movieObject.Genre}</Card.Text>
                    <Card.Text className="pb-2 border-bottom border-1 border-dark">
                      Runtime: {movieObject.Runtime}
                    </Card.Text>
                    <Card.Text>{movieObject.Plot}</Card.Text>
                    <Button
                      className=" text-dark"
                      variant="danger"
                      onClick={goToHomepage}
                    >
                      Torna in Homepage
                    </Button>
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default MovieDetails
