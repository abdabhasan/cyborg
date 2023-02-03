import "./Section.scss";
import { SectionButton } from "../../components/index";

const Section = (props) => {
  return (
    <>
      <Section className="section">
        <div className="container">{props.children}</div>
        <SectionButton></SectionButton>
      </Section>
    </>
  );
};

export default Section;
