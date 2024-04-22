import React from "react";
import Card from "../components/Card";
import img from "../project1.png";
import img2 from "../project2.png";
import img3 from "../project3.png";
import img4 from "../project4.png";
import img5 from "../project5.png";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="project" className="lg:w-[80%] mt-[100px]">
      <div>
        <div className="">
          <div className="">
            <div className="">
              <div className="flex justify-center w-full flex-col">
                <div className="">
                  <div className="">
                    <motion.div
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 30 }}
                      transition={{ type: "tween", duration: 0.5 }}
                      className="flex items-center justify-center gap-4"
                    >
                      <h1 className="sm:text-[20px] md:text-[40px] text-green">
                        02.
                      </h1>
                      <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
                        Projects
                      </h1>
                      <span className="sm:w-[180px] md:w-[350px] border-b border-slate"></span>
                    </motion.div>

                    <div className="my-[100px] w-full ">
                      <div className="lg:ml-[250px]">
                        <Card
                          position={"left"}
                          description={
                            'The project "Loan Calculator" is a web application designed to help users calculate and analyze loan-related financial data. Developed using HTML, CSS, and JavaScript, this calculator offers a simple and intuitive interface for estimating loan payments, interest rates, and repayment schedules.'
                          }
                          git={true}
                          link1={"https://github.com/JCDWHIZ/loan-calculator"}
                          library={["HTML", "CSS", "Javascript"]}
                          name={"Loan Calculator"}
                          img={img}
                          site={true}
                          link2={"https://loan-calculator-nu-rouge.vercel.app/"}
                        />
                        <Card
                          position={"right"}
                          description={
                            "This is a simple landing page made using the library SASS. It contains all basic requirements of a landing page e.g header, footer etc."
                          }
                          library={["SASS", "React", "AOS"]}
                          name={"A-simple-landing-page-using-sass"}
                          git={true}
                          link1={
                            "https://github.com/JCDWHIZ/a-simple-landing-page-using-sass"
                          }
                          site={true}
                          link2={"https://finache.vercel.app"}
                          img={img2}
                        />
                        <Card
                          description={
                            "This simple landing page has just a simple function. Engage in a breathing exercise in the site"
                          }
                          git={true}
                          library={["HTMl", "Javascript", "CSS"]}
                          link1={"https://github.com/JCDWHIZ/relaxer"}
                          site={true}
                          link2={"https://relaxer-one.vercel.app"}
                          name={"Relaxer"}
                          position={"left"}
                          img={img3}
                        />
                        <Card
                          description={
                            "This is a javascript game that utilizes the fetch function api calls. You think you can win a trivia game, then try this"
                          }
                          git={true}
                          library={["HTML", "CSS", "Javascript"]}
                          link1={"https://github.com/JCDWHIZ/JSGames"}
                          site={true}
                          link2={"https://quizgame-gray.vercel.app"}
                          position={"right"}
                          name={"JSGames"}
                          img={img4}
                        />

                        <Card
                          description={
                            'The project "Hulu Clone" is a web application that replicates the functionality and design of the popular streaming platform Hulu. Developed using React.js, this clone offers a visually appealing and interactive interface for browsing a wide range of movies and TV shows.'
                          }
                          git={true}
                          link1={"https://github.com/JCDWHIZ/hulu-clone"}
                          library={[
                            "React JS",
                            "react-icons",
                            "CSS",
                            "Javascript",
                          ]}
                          link2={"https://huluclone-xi.vercel.app"}
                          name={"Hulu clone"}
                          position={"left"}
                          site={true}
                          img={img5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
