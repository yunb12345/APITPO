import { Outlet } from "react-router-dom";
import logo from "../assets/logo-placeholder-3.jpg";
import { AiOutlineX } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Layout = ()=>{
    return(
        <div className="overflow-x-hidden mx-auto">
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
            <main>
                <Outlet/>
            </main>
            <footer className="bg-apiyellow">
                <div className="flex flex-row justify-center py-10">
                    <div className="flex flex-row px-10 items-center text-xl">
                        <div className="px-1">
                            <AiOutlineX/>
                        </div>
                        <div className="px-1">
                            <AiOutlineYoutube/>
                        </div>
                        <div className="px-1">
                            <AiOutlineInstagram/>
                        </div>
                        <div className="px-1">
                            <AiOutlineLinkedin/>
                        </div>
                
                    </div>
                    <div className="flex justify-start flex-col px-10">
                        <div className="pb-5">
                            <h2>Legal</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Terminos</h3>
                            <h3>Privacidad</h3>
                        </div>
                    </div>
                    <div className="flex justify-start flex-col px-10">
                        <div className="pb-5">
                            <h2>Servicios</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Diseño de proyectos</h3>
                            <h3>Calcular costos</h3>
                            <h3>Subida de tickets</h3>
                        </div>
                    </div>
                    <div className="flex justify-start flex-col px-10">
                        <div className="pb-5">
                            <h2>Contacto</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Inicio</h3>
                            <h3>Nosotros</h3>
                            <h3>Contacto</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Layout