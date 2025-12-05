import '../styles/selectedLinks.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBookOpen } from "react-icons/fa";

const Estudo = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <FaBookOpen size={30} className='iconTitle' />
                <h3 className='titlePage'>Educação & Estudo</h3>
            </div>

            <h5 className='subCategoria mt-0'>Calculadoras</h5>
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

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.omnicalculator.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/estudo/omniCalculator.png" alt="Framer Logo" className="linkIcon" />
                                OmniCalculator
                            </h5>

                            <p className='linkDescript'>
                                Reúne centenas de calculadoras inteligentes para tudo: física, matemática, saúde, finanças, conversões e muito mais. Tudo explicado de forma clara e prática.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <h5 className='subCategoria'>Cursos & Aprendizado</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.lingohut.com/pt' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/estudo/khanAcademy.png" alt="Framer Logo" className="linkIcon" />
                                Khan Academy
                            </h5>

                            <p className='linkDescript'>
                                Criada por especialistas, a biblioteca da Khan Academy de prática e lições confiáveis abrange matemática, ciências e muito mais.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <h5 className='subCategoria'>Idomas</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.lingohut.com/pt' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/estudo/lingoHunt.png" alt="Framer Logo" className="linkIcon" />
                                LingoHunt
                            </h5>

                            <p className='linkDescript'>
                                Aprenda um idioma estrangeiro por conta própria. Com LingoHut você pode aprender mais de 45 idiomas. Você aprenderá frases curtas e palavras que usa diariamente.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Estudo;