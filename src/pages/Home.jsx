import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Others from "../sections/Others";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import SpeechRecognitionComponent from "../sections/nnn";
import { useNavigate } from "react-router-dom";

function Home({ about, project, archive }) {
  const [inputSequence, setInputSequence] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      setInputSequence((prev) => (prev + event.key).slice(-5)); // Keep last 5 characters

      if (inputSequence === "admin") {
        navigate("/admin"); // Redirect to the admin page
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress); // Cleanup
    };
  }, [inputSequence, navigate]);
  return (
    <div className="bg-lightnavy overflow-hidden">
      <Navbar />
      <Hero about={about} />
      <About about={about} />
      <Projects project={project} />
      <Others archive={archive} />
      <Contact about={about} />
      <Footer about={about} />
      <SpeechRecognitionComponent />
    </div>
  );
}

export default Home;
