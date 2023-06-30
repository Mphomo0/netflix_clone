import { Container, Navbar } from 'react-bootstrap';
import LogoNetflix from '../images/Logonetflix.png'

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand className='ml-3'><img src={LogoNetflix} alt='logo' width={120} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;