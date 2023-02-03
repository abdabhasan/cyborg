import Form from "react-bootstrap/Form";
import "./SearchBar.scss";
const SearchBar = () => {
  return (
    <>
      <Form className="d-flex custom-search-bar d-none mx-5">
        <Form.Control
          type="search"
          placeholder="Type Something"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </>
  );
};

export default SearchBar;
