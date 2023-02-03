import "./Buttons.scss";

const SectionButton = (props) => {
  return (
    <>
      <button className="btn custom-btn px-4 py-2 mt-4 mb-5">
        <a href={props.href}>{props.btnTitle}</a>
      </button>
    </>
  );
};
const HeroButton = (props) => {
  return (
    <>
      <button className="btn custom-btn px-4 py-2 mt-4 mb-5">
        <a href={props.href}>{props.btnTitle}</a>
      </button>
    </>
  );
};
const GamingLibraryButton = (props) => {
  return (
    <>
      <button className="btn custom-btn px-4 py-2 mt-4 mb-5">
        <a href={props.href}>{props.btnTitle}</a>
      </button>
    </>
  );
};

export default SectionButton;
export { HeroButton };
export { GamingLibraryButton };
