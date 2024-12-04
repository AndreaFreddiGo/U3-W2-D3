import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap'
import { useParams, navigate, useState } from 'react-router-dom'

const MovieDetails = () => {
  const params = useParams()
  console.log('PARAMS', params)

  const goToHomepage = () => {
    navigate('/Homepage')
  }

  const [movieObject, setMovieObject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <main className="bg-darkest vh-100">
      <Container>
        <Row className="vh-100 align-items-center">
          <Col className="col-12 mx-0">
            {isError && (
              <>
                <Alert variant="danger">Errore nel recupero della pasta</Alert>
                <Button variant="danger" onClick={goToHomepage}>
                  Torna al menu
                </Button>
              </>
            )}

            {isLoading && (
              <div>
                <Spinner animation="border" variant="danger" />
              </div>
            )}

            {!isError && !isLoading && pastaObject && (
              <>
                <Card className="mb-2">
                  <Card.Img
                    variant="top"
                    src={pastaObject.image}
                    alt={'immagine di ' + pastaObject.name}
                  />
                  <Card.Body>
                    <Card.Title>{pastaObject.name}</Card.Title>
                    <Card.Text>{pastaObject.description}</Card.Text>
                    <Card.Text>{pastaObject.price}$</Card.Text>
                    <Button variant="danger" onClick={goToHomepage}>
                      Torna al menu
                    </Button>
                  </Card.Body>
                </Card>
                <PastaComments pasta={pastaObject} />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default MovieDetails
