import Container from "react-bootstrap/Container";
import { Welcoming } from "../../components/index";
import { MostPopular, YourGaming } from "../index";

import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <Container className="custom-hero-container py-4 px-5 my-3 ">
        <Welcoming />
        <MostPopular />
        <YourGaming />
      </Container>
    </>
  );
};

export default Hero;
