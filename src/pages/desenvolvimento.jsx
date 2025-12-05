import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCode } from "react-icons/fa6";
import "../styles/selectedLinks.scss";

const Desenvolvimento = () => {
  const filtros = [
    { id: "todos", label: "Todos" },
    { id: "bibliotecas", label: "Bibliotecas" },
    { id: "estudos", label: "Estudos" },
  ];

  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const links = [
    {
      titulo: "React Bits",
      url: "https://reactbits.dev/",
      img: "src/assets/desenvolvimento/reactBits.png",
      descricao:
        "Coleção de componentes React de alta qualidade, animados e customizáveis.",
      categoria: "bibliotecas",
    },

    {
      titulo: "Front-End Mentor",
      url: "https://www.frontendmentor.io/",
      img: "src/assets/desenvolvimento/frontEndMentor.png",
      descricao:
        "Construa projetos reais e melhore suas habilidades de front-end.",
      categoria: "estudos",
    },

    {
      titulo: "QuickRef.ME",
      url: "https://quickref.me/",
      img: "src/assets/desenvolvimento/quickRefMe.png",
      descricao:
        "Busque cheatsheets e referências rápidas de várias linguagens.",
      categoria: "estudos",
    },

    {
      titulo: "Coddy",
      url: "https://coddy.tech/",
      img: "src/assets/desenvolvimento/coddyTech.png",
      descricao:
        "Aprenda programação de forma divertida com desafios diários.",
      categoria: "estudos",
    },
  ];

  const linksFiltrados = links.filter(
    (item) => filtroAtivo === "todos" || item.categoria === filtroAtivo
  );

  return (
    <Container className="page-container">

      <div className="d-flex gap-1 mb-3">
        <FaCode size={30} className="iconTitle" />
        <h3 className="titlePage">Programação & Desenvolvimento</h3>
      </div>

      <div className="btnfiltro mb-4">
        {filtros.map((f) => (
          <Button
            key={f.id}
            className={filtroAtivo === f.id ? "activeFiltro" : ""}
            onClick={() => setFiltroAtivo(f.id)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <Row className="g-2">
        {linksFiltrados.map((link, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Card className="cardSelectedLink">
                <h5 className="titleLink d-flex align-items-center gap-2">
                  <img src={link.img} className="linkIcon" alt={link.titulo} />
                  {link.titulo}
                </h5>

                <p className="linkDescript">{link.descricao}</p>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Desenvolvimento;
