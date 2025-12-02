import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import { IoHardwareChip } from "react-icons/io5";

const Tecnologia = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <IoHardwareChip size={30} className='iconTitle' />
                <h3 className='titlePage'>Hardware & Tecnologia</h3>
            </div>


            <h5 className='subCategoria mt-0'>Montagem & Consumo</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://pc-builds.com/pt/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>

                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/tecnologia/pcBuilds.png" alt="Framer Logo" className="linkIcon" />
                                PC Builds
                            </h5>


                            <p className='linkDescript'>
                                Descubra calculadoras de gargalos, FPS, RAM e PSU, requisitos de sistema de jogos, benchmarks de componentes e muito mais!
                            </p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://technical.city/pt' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>

                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/tecnologia/tecnicalCity.png" alt="Framer Logo" className="linkIcon" />
                                Technical City
                            </h5>


                            <p className='linkDescript'>
                                Comparações, especificações e classificações de placas de vídeo e processadores
                            </p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://meupc.net/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>

                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/tecnologia/meuPC.png" alt="Framer Logo" className="linkIcon" />
                                MEUPC.NET
                            </h5>


                            <p className='linkDescript'>
                                Monte seu computador Gamer mais barato. Escolha cada componente e monte o PC perfeito para você, são milhares de peças disponíveis.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Tecnologia;