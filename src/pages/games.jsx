import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import { RiGameFill } from "react-icons/ri";

const Games = () => {
    return (
        <Container className="design-container">
            <div className="d-flex gap-1">
                <RiGameFill size={30} className='iconTitle' />
                <h3 className='titlePage'>Games</h3>
            </div>


            <h5 className='subCategoria mt-0'>Imagens / Assets / Mockups</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.steamgriddb.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/games/steamGriddb.png" alt="Framer Logo" className="linkIcon" />
                                SteamGridDB
                            </h5>

                            <p className='linkDescript'>
                                Baixe e compartilhe recursos personalizados de jogos e personalize sua biblioteca de jogos.
                            </p>
                        </Card>
                    </a>
                </Col>


            </Row>
        </Container>
    )
}

export default Games;