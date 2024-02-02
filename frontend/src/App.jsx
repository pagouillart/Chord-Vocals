import Navbar from "./components/Navbar/Navbar";
import guitarLogo from "./assets/guitar-logo.png";
import "./App.scss";

function App() {
  return (
    <section className="homePage">
      <Navbar />
      <h2 className="homeTitle">Get and Post all your songs!</h2>
      <img src={guitarLogo} alt="guitarimg" className="guitarLogo" />
    </section>
  );
}

export default App;
