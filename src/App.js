import "./App.css";
import ProfileImg from "./components/ProfileImg";
import Info from "./components/Info";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <ProfileImg/>
      <Info />
      <About />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
