import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Navbar } from "./components/index";
import { Header, Hero, Footer } from "./sections/index";
const App = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Hero />
    </>
  );
};

export default App;

// i wanna know how to give the prop from parent
// to the child to give props from section to the section button
