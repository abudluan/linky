import '../styles/selectedLinks.scss';
import { MdWork } from "react-icons/md";
import { Container, Row, Col, Card } from 'react-bootstrap';

const Trabalho = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <MdWork size={30} className='iconTitle' />
                <h3 className='titlePage'>Produtividade & Trabalho</h3>
            </div>

            <h5 className='subCategoria mt-0'>Currículos & Portfólios</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://resumegenius.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/trabalho/resumeGenius.png" alt="Framer Logo" className="linkIcon" />
                                Resume Genius
                            </h5>

                            <p className='linkDescript'>
                                Faça um currículo pronto para o trabalho rapidamente. 1) Escolha entre mais de 150 modelos, 2) Gerar conteúdo amigável para ATS, 3) Baixar para Word ou PDF. Confiável por profissionais.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Trabalho;