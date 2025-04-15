import { Project } from "@/types";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { parseStringArray } from "@/hooks";

function Projects() {
  const project: [Project] = JSON.parse(localStorage.project);
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
                        {project?.map((item, index) => (
                          <Card
                            key={index}
                            position={index % 2 === 1 ? "right" : "left"}
                            description={item.description}
                            git={item.githubLink ? true : false}
                            link1={item.githubLink}
                            library={parseStringArray(item.technologies)}
                            name={item.title}
                            img={`${item.image}`}
                            site={item.demoLink ? true : false}
                            link2={item.demoLink}
                          />
                        ))}
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
