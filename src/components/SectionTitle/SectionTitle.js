import "./SectionTitle.scss";

const SectionTitle = (props) => {
  return (
    <>
      <h2 className="section-title">
        <span className="first-part-of-title">{props.firstPartOfTitle}</span>
        <span className="second-part-of-title"> {props.secondPartOfTitle}</span>
      </h2>
    </>
  );
};

export default SectionTitle;
