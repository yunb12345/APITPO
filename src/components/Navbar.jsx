import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function navbar() {
  return (
    <>
        <Navbar key="lg" expand="lg" className="mb-3" style={{ backgroundColor: "#FAFF0F", borderColor: "#11077d",}}>
          <Container fluid>
            <Navbar.Brand href="#"style={{marginBottom: "10px"}}>Logo Placeholder</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              style={{ backgroundColor: "#FAFF0F", borderColor: "#11077d",}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Logo Placeholder
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Inicio</Nav.Link>  
                  <Nav.Link href="#features">Servicios</Nav.Link>
                  <Nav.Link href="#pricing">Beneficios</Nav.Link>
                  <Nav.Link href="#pricing">Contacto</Nav.Link>
                  <Button variant="outline-success" style={{ marginRight: "10px", marginBottom: "10px", backgroundColor: "black", borderColor: "black", color: "#FAFF0F"}}>Ingresar</Button>
                  <Button variant="outline-success" style={{ marginRight: "10px", marginBottom: "10px", backgroundColor: "black", borderColor: "black", color: "#FAFF0F"}}>Registrarse</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default navbar;