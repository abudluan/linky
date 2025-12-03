import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import { LuWallpaper } from "react-icons/lu";

const Wallpaper = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <LuWallpaper size={30} className='iconTitle' />
                <h3 className='titlePage'>Wallpapers & Estilização</h3>
            </div>

            <h5 className='subCategoria mt-0'>Wallpapers Animados</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://8bitdashboard.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/wallpaper/8bitDash.png" alt="Framer Logo" className="linkIcon" />
                                8 Bit Dashboard
                            </h5>

                            <p className='linkDescript'>
                                O painel perfeito. Gifs de 8 bits com um relógio, palavras de atalho e uma saudação. Pronto para ser sua página inicial!
                            </p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.desktophut.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/wallpaper/desktopHut.png" alt="Framer Logo" className="linkIcon" />
                                DesktopHut
                            </h5>

                            <p className='linkDescript'>
                                DesktopHut permite que você coloque papéis de parede ao vivo na tela do seu computador e telefone celular. Você pode usar papéis de parede animados 3D e 2D
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <h5 className='subCategoria'>Wallpapers Estáticos</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://wallhaven.cc/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/wallpaper/wallhaven.png" alt="Framer Logo" className="linkIcon" />
                                Wallhaven.cc
                            </h5>

                            <p className='linkDescript'>
                                Wallhaven.cc é o lar de 1.266.001 papéis de parede de alta qualidade que foram vistos um total de 3,8 bilhões de vezes!
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>

        </Container>
    )
}

export default Wallpaper;