import logo from "../assets/icons/logo trans.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-light "> {/* d-flex p-2 justify-content-between */}
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="180"
            height="50"
            className="d-inline-block align-top"
            alt="logo of the academic nest"
          />
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav navbarScroll>
            <Nav.Link href="#on-campus" className="fs-5">
              On Campus
            </Nav.Link>
            <Nav.Link href="#online" className="fs-5">
              Online
            </Nav.Link>
            <Nav.Link href="#sign-in" className="fs-5">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
