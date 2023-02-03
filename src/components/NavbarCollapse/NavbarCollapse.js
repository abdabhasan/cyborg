import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarCollapse.scss";
import profile from "../../assets/images/profile-header.jpg";
const NavbarCollapse = () => {
  return (
    <>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="custom-nav-link ms-3 ">
            Home
          </Nav.Link>
          <Nav.Link href="#Browse" className="custom-nav-link ms-3">
            Browse
          </Nav.Link>
          <Nav.Link href="#Details" className="custom-nav-link ms-3">
            Details
          </Nav.Link>
          <Nav.Link href="#Streams" className="custom-nav-link ms-3">
            Streams
          </Nav.Link>
          <Nav.Link
            href="#Profile"
            className="custom-nav-link ms-3 ps-3 py-2 d-flex profile"
          >
            Profile
            <img src={profile} alt="profile" className="ms-2 rounded-circle " />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavbarCollapse;
