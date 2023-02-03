import Container from "react-bootstrap/Container";
import { HeroButton } from "../index";
import "./Welcoming.scss";

const Welcoming = () => {
  return (
    <>
      <Container className="main-container my-4  ">
        <div className=" wave-text p-5">
          <h4 className="sub-title">Welcome To Cyborg</h4>
          <h1 className="main-title">
            <span>BROWSE</span> OUR
            <br /> POPULAR GAMES HERE
          </h1>
          <HeroButton href="#browse.html" btnTitle="browse now"></HeroButton>
        </div>
      </Container>
    </>
  );
};

export default Welcoming;
