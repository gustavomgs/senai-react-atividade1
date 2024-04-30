import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent(){
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">MEU SISTEMÃO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/sobre-nos">Sobre Nós</Nav.Link>    
                <Nav.Link href="/contato">Contato</Nav.Link>                  
            </Nav>
            <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavBarComponent;