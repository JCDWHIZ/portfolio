import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [shadow, setShadow] = useState("");
  const [fixed, setFixed] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setShadow("shadow-lg");
        setFixed("fixed");
      } else {
        setShadow("");
        setFixed("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleDownload = () => {
    const pdfFilePath = "cv.pdf";
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "cv.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div>
      <div
        className={`bg-lightnavy ${fixed} ease-in-out top-0 w-full z-[999] ${shadow} `}
      >
        <div className="p-4 px-[50px] flex justify-between items-center sm:hidden md:block">
          <div className="flex items-center gap-[35px] ml-6">
            <motion.a
              href="#about"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ type: "tween", delay: 0.5 }}
            >
              <h1 className="text-[18px]">
                <span className="text-green">01.</span>{" "}
                <span className="text-white">About </span>
              </h1>
            </motion.a>
            <motion.a
              href="#project"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ type: "tween", delay: 0.7 }}
            >
              <h1 className="text-[18px]">
                <span className="text-green">02.</span>{" "}
                <span className="text-white">Projects </span>
              </h1>
            </motion.a>
            <motion.a
              href="#contact"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ type: "tween", delay: 0.9 }}
            >
              <h1 className="text-[18px]">
                <span className="text-green">03.</span>{" "}
                <span className="text-white">Contact </span>
              </h1>
            </motion.a>
            <motion.button
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -30, opacity: 0 }}
              transition={{ type: "tween", delay: 1.1 }}
              onClick={handleDownload}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px]"
            >
              Resume
            </motion.button>
          </div>

          {/* <div className=" flex gap-3 mr-6">
            <button className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px]">
              Web Dev.
            </button>
            <button className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px]">
              Graphic Designer
            </button>
          </div> */}
        </div>

        <div className="py-6 px-[30px] flex justify-between items-center sm:block md:hidden shadow-lg">
          <div className="">
            <h1 className="text-[18px] text-green">My Porfoliio</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
