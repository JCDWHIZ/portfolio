import React from "react";
import Card from "../components/Card";
import img from "../project1.png";

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
                    <div className="flex items-center justify-center gap-4">
                      <h1 className="sm:text-[20px] md:text-[40px] text-green">
                        02.
                      </h1>
                      <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
                        Projects
                      </h1>
                      <span className="sm:w-[180px] md:w-[350px] border-b border-slate"></span>
                    </div>

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
