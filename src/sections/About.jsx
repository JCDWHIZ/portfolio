import React from "react";
import img from "../profile.jpeg";
import { motion } from "framer-motion";
import { TiMediaPlayOutline } from "react-icons/ti";

function About({ about }) {
  function parseStringArray(input) {
    try {
      const parsedArray = JSON.parse(input);
      if (Array.isArray(parsedArray)) {
        return parsedArray;
      } else {
        throw new Error("Parsed result is not an array");
      }
    } catch (error) {
      console.error("Error parsing input string:", error);
      return [];
    }
  }
  const baseurl = "https://portfolio-backend-d7ca.onrender.com/";
  return (
    <div>
      <section className="lg:w-[80%]" id="about">
        <div className="">
          <div className="">
            <div className="flex justify-center">
              <div className="">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ type: "tween", duration: 0.5 }}
                  className="flex items-center gap-4  sm:justify-center md:justify-start"
                >
                  <h1 className="sm:text-[20px] md:text-[40px] text-green">
                    01.
                  </h1>
                  <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
                    About Me
                  </h1>
                  <span className="sm:w-[170px] md:w-[350px] border-b border-slate"></span>
                </motion.div>
                <div className="my-[50px] md:w-[700px] sm:w-[500px] flex gap-3 md:flex-nowrap sm:flex-wrap sm:justify-center md:justify-between">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -80 }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="text-slate text-[18px] sm:w-[60%] md:w-[45%] lg:w-[80%] flex flex-col justify-center"
                  >
                    <p className="font-sans">{about?.[0]?.story}</p>
                    <p className="my-3 font-sans">
                      Here are the technologies I’ve been working with recently:
                    </p>

                    <ul className="my-3 grid grid-cols-2 md:w-[500px] sm:w-[450px]">
                      {parseStringArray(about?.[0]?.technologies)?.map(
                        (item, index) => (
                          <li className="flex items-center gap-3 " key={index}>
                            <TiMediaPlayOutline className="text-green text-[10px]" />{" "}
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 80 }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className=" h-[400px]"
                  >
                    <div className="object-cover sm:w-[270px] md:w-[350px] h-full relative ease-in-out">
                      <img
                        src={`${baseurl}images/${about?.[0]?.image}`}
                        alt="profile"
                        className="object-cover w-full h-full"
                      />
                      <div className="border border-green rounded-lg sm:w-[270px] md:w-[350px] h-[400px] ease-in-out z-[-1] mt-[-380px] ml-[20px]"></div>
                      <div className="absolute inset-0 bg-[#24ffcc] opacity-30 hover:opacity-0 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
