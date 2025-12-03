import '../styles/selectedLinks.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBookOpen } from "react-icons/fa";

const Estudo = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <FaBookOpen size={30} className='iconTitle' />
                <h3 className='titlePage'>Entretenimento & Curiosidades</h3>
            </div>

            <h5 className='subCategoria mt-0'>Matemática</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.cymath.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/estudo/cyMath.png" alt="Framer Logo" className="linkIcon" />
                                Cymath
                            </h5>

                            <p className='linkDescript'>
                                Basta inserir seu problema de matemática e deixar a Cymath resolvê-lo para você passo a passo! 
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Estudo;