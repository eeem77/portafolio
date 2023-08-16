import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Social from './Social';
import Image from 'react-bootstrap/Image';
import './Nav.css'

function Navbartop() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <a href="http://www.cne.gob.ve/" className="nav-item-social"><Image width={50} src="cne.png" fluid /></a>
                        <a href="http://www.cne.gob.ve/web/la_institucion/autoridades.php" className="nav-item-social"><Image width={30} src="autoridades.png" fluid /></a>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Social />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbartop;