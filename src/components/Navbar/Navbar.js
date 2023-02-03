import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png";
import { SearchBar, NavbarCollapse } from "../index";

import "./Navbar.scss";
function BasicExample() {
  return (
    <Navbar className="custom-nav" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <SearchBar />
        <NavbarCollapse />
      </Container>
    </Navbar>
  );
}

export default BasicExample;
