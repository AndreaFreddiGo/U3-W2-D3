import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const params = useParams()
  console.log('PARAMS', params)

  return (
    <main className="bg-darkest vh-100">
      <Container>
        <Row className="vh-100 align-items-center">
          <Col className="col-12 mx-0">
            <p className="text-light fs-2 fw-semibold text-center">
              Under Construction..
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default MovieDetails
