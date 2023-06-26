import "./style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    /*NAVBAR*/
    <Navbar expand="lg" className="bg-body-tertiary   ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" /*itens navbar*/>            
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre mim</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;