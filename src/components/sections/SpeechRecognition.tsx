import { useState } from "react";
import { DiIntellij } from "react-icons/di";
import { FaTimes } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { motion } from "framer-motion";
import { startListening } from "@/hooks";

function SpeechRecognitionComponent() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [Open, setOpen] = useState(true);

  const stopListening = () => {
    setIsListening(false);
    setOpen(false);
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
            onClick={
              isListening
                ? stopListening
                : () => startListening(setIsListening, setTranscript, setOpen)
            }
            className={`text-[25px] text-green rounded-full p-5  shadow-lg ${
              isListening ? "bg-green text-darknavy" : "bg-darknavy"
            }`}
          >
            {isListening ? <DiIntellij /> : <DiIntellij />}
          </button>
        </div>
        {transcript && (
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 30 }}
            transition={{ type: "tween" }}
            className="bg-white rounded-tl-full rounded-bl-full fixed right-[78px] bottom-11 p-3"
          >
            <p>{transcript}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default SpeechRecognitionComponent;
