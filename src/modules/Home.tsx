import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Others from "@/components/sections/Others";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SpeechRecognitionComponent from "@/components/sections/SpeechRecognition";
import { useNavigate } from "react-router-dom";

function Home() {
  const [inputSequence, setInputSequence] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      setInputSequence((prev) => (prev + event.key).slice(-5));
      if (inputSequence === "admin") {
        navigate("/admin");
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [inputSequence, navigate]);
  return (
    <div className="bg-lightnavy overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Others />
      <Contact />
      <Footer />
      <SpeechRecognitionComponent />
    </div>
  );
}

export default Home;
