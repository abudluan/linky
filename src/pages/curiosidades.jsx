import '../styles/selectedLinks.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdEmojiEmotions } from "react-icons/md";

const Curiosidades = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <MdEmojiEmotions size={30} className='iconTitle' />
                <h3 className='titlePage'>Entretenimento & Curiosidades</h3>
            </div>

            <h5 className='subCategoria mt-0'>Testes & Simuladores</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.death-clock.org/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/curiosidades/deathClock.png" alt="Framer Logo" className="linkIcon" />
                                The Death Clock
                            </h5>

                            <p className='linkDescript'>
                                Nossa calculadora avançada de expectativa de vida irá prever com precisão sua data de morte para você, dependendo de onde você mora, quanto você fuma e seu estilo de vida.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <h5 className='subCategoria'>Cultura Pop & Memes</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://floor796.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/curiosidades/floor796.png" alt="Framer Logo" className="linkIcon" />
                                Floor796
                            </h5>

                            <p className='linkDescript'>
                                Uma enorme cena de animação com muitas referências a memes, jogos, filmes, séries, anime, grupos de música.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <h5 className='subCategoria'>Experiências Interativas</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://neal.fun/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/curiosidades/nealFun.png" alt="Framer Logo" className="linkIcon" />
                                Neal.fun
                            </h5>

                            <p className='linkDescript'>
                                Jogos, visualizações, interativos e outras coisas estranhas criadas por Neal Agarwal.
                            </p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://theuselessweb.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/curiosidades/uselessWeb.png" alt="Framer Logo" className="linkIcon" />
                                The Useless Web
                            </h5>

                            <p className='linkDescript'>
                                O botão perfeito para o entediado, ou aqueles que procuram encontrar sites aleatórios online!
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Curiosidades;