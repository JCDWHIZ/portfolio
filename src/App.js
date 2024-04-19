import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Others from "./sections/Others";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SpeechRecognitionComponent from "./sections/nnn";

function App() {
  return (
    <div className="App">
      <div className="bg-lightnavy">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Others />
        <Contact />
        <Footer />
        <SpeechRecognitionComponent />
      </div>
    </div>
  );
}

export default App;
