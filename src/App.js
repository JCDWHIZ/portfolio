import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Others from "./sections/Others";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loading from "./components/Loading";
import SpeechRecognitionComponent from "./sections/nnn";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading loading={loading} />;
  }
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
