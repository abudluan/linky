import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import { FaPalette } from "react-icons/fa6";

const Design = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <FaPalette size={28} className='iconTitle' />
                <h3 className='titlePage'>Design & Imagens</h3>
            </div>


            <h5 className='subCategoria mt-0'>Ferramentas & Geradores</h5>
            <Row className='g-2'>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://quickfavs.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/quickFavs.png" alt="Framer Logo" className="linkIcon" />
                                QuickFavs
                            </h5>

                            <p className='linkDescript'>Crie favicons de alta qualidade para seu site ou aplicativo com facilidade. Envie sua imagem, personalize-a e baixe um pacote completo de favicon otimizado para todas as plataformas.</p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://baixarfavicon.com.br/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/baixarFavIcon.png" alt="Framer Logo" className="linkIcon" />
                                Baixar Favicon
                            </h5>

                            <p className='linkDescript'>Como baixar o favicon de um site? Insira a URL no campo indicado e clique em 'Baixar'. O favicon será localizado automaticamente e disponibilizado para download.</p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://haikei.app/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/hankei.png" alt="Framer Logo" className="linkIcon" />
                                Haikei
                            </h5>

                            <p className='linkDescript'>Uma ferramenta de design baseada na web para gerar ativos exclusivos de design SVG para sites, mídias sociais, postagens de blog, papéis de parede, cartazes e muito mais!</p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.shapedivider.app/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/shapeDivider.png" alt="Framer Logo" className="linkIcon" />
                                Shape Divider App
                            </h5>

                            <p className='linkDescript'>Uma ferramenta gratuita para facilitar a exportação de divisores de forma em SVG. As formas são modelos prontos e são exportadas exatamente como foram criadas, podendo ser ajustadas depois no código do seu projeto.</p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <h5 className='subCategoria'>Cores & Paletas</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.happyhues.co/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/happyHues.png" alt="Framer Logo" className="linkIcon" />
                                Happy Hues
                            </h5>

                            <p className='linkDescript'>Não tem certeza de quais cores usar em seus projetos ou onde usá-las? O Happy Hues é um site de inspiração de paletas de cores que funciona como um exemplo prático de como as cores podem ser usadas em seus projetos de design.</p>
                        </Card>
                    </a>
                </Col>
            </Row>


           
            
        </Container>
    )
}

export default Design