import "./MostPopular.scss";
import {
  Section,
  SectionTitle,
  MostPopularItems,
} from "../../../components/index";

const MostPopular = () => {
  return (
    <Section>
      <SectionTitle
        firstPartOfTitle="most popular"
        secondPartOfTitle="right now"
      />
      <MostPopularItems />
    </Section>
  );
};

export default MostPopular;
