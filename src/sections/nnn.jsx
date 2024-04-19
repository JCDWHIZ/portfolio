import React, { useState } from "react";
import { DiIntellij } from "react-icons/di";
import { FaTimes } from "react-icons/fa";
import { BiShow } from "react-icons/bi";

function SpeechRecognitionComponent() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [Open, setOpen] = useState(true);

  // Function to start speech recognition
  const startListening = () => {
    setOpen(true);
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition(); // Chrome requires the "webkit" prefix
    recognition.lang = "en-US"; // Specify language (e.g., English-US)

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const speechToText = event.results[last][0].transcript;
      setTranscript(speechToText);

      // Check for keywords
      if (speechToText.toLowerCase().includes("contact")) {
        handleContact();
      } else if (speechToText.toLowerCase().includes("about")) {
        handleAbout();
      } else if (speechToText.toLowerCase().includes("project")) {
        handleProjects();
      } else if (speechToText.toLowerCase().includes("download resume")) {
        handleDownloadResume();
      }
    };

    recognition.start();
  };

  // Function to stop speech recognition
  const stopListening = () => {
    setIsListening(false);
    setOpen(false);
  };

  // Function to handle the "contact" keyword
  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle the "about" keyword
  const handleAbout = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle the "projects" keyword
  const handleProjects = () => {
    const contactSection = document.getElementById("project");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleDownloadResume = () => {
    const pdfFilePath = "cv.pdf";
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "cv.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="">
      <div className="">
        <div className="fixed bottom-[90px] right-10 z-[99]">
          <div className="p-3 bg-white rounded-lg sm:block md:hidden">
            {Open ? (
              <FaTimes
                className="text-[20px]"
                onClick={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <BiShow
                className="text-[20px]"
                onClick={() => {
                  setOpen(true);
                }}
              />
            )}
            <div className={`${Open ? "block" : "hidden"}`}>
              <h1>Try saying: </h1>
              <ul>
                <li>Project</li>
                <li>Contact</li>
                <li>About</li>
                <li>Download Resume</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fixed bottom-8 right-8 sm:block md:hidden z-[99]">
          <button
            onClick={isListening ? stopListening : startListening}
            className={`text-[25px] text-green rounded-full p-5  shadow-lg ${
              isListening ? "bg-green text-darknavy" : "bg-darknavy"
            }`}
          >
            {isListening ? <DiIntellij /> : <DiIntellij />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeechRecognitionComponent;
