import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import { FaTools } from "react-icons/fa";

const Ferramentas = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <FaTools size={30} className='iconTitle' />
                <h3 className='titlePage'>Ferramentas & Utilidades Online</h3>
            </div>


            <h5 className='subCategoria mt-0'>Compartilhamento</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://file.pizza/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/ferramentas/filePizza.png" alt="Framer Logo" className="linkIcon" />
                                File Pizza
                            </h5>

                            <p className='linkDescript'>FilePizza é um serviço que permite enviar arquivos diretamente entre navegadores, sem armazenamento em servidores, usando conexão P2P via WebRTC.</p>
                        </Card>
                    </a >
                </Col>
            </Row>

            <h5 className='subCategoria'>Utilidades de Arquivos</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://pdfcandy.com/pt/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/ferramentas/candyPDF.png" alt="Framer Logo" className="linkIcon" />
                                PDF Candy
                            </h5>

                            <p className='linkDescript'>Todas as ferramentas de que você precisa para processar arquivos PDF: editar, converter, mesclar, compactar, assinar e muito mais.</p>
                        </Card>
                    </a >
                </Col>
            </Row>

            <h5 className='subCategoria'>Comparação</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='hhttps://versus.com/br' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/ferramentas/versus.png" alt="Framer Logo" className="linkIcon" />
                                Versus
                            </h5>

                            <p className='linkDescript'>Versus é uma plataforma global de comparação com base em dados, abrangendo mais de 90 categorias. Compare smartphones, câmeras, fones de ouvido, e muito mais.</p>
                        </Card>
                    </a >
                </Col>
            </Row>
        </Container>
    )
}

export default Ferramentas;