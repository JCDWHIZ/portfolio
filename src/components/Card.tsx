import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "framer-motion";

function Card({
  position,
  description,
  name,
  library,
  site,
  git,
  img,
  link1,
  link2,
}) {
  return (
    <div>
      <div className="">
        <div className="flex justify-center items-center">
          <div className="">
            <div className="lg:w-[900px] md:w-[600px] sm:w-[450px] ">
              {position === "left" ? (
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -80 }}
                  transition={{ type: "tween", duration: 0.6 }}
                  className="flex justify-center items-center relative my-[50px] "
                >
                  <div className="text lg:w-[40%] md:w-[30%] z-[50] sm:w-[70%] -mt-[100px]">
                    <h1 className="text-green my-2">Featured Project</h1>
                    <h1 className="text-[24px] text-white roboto my-2">
                      {name}
                    </h1>

                    <div className="roboto text-slate p-5 rounded-lg shadow-lg bg-darknavy lg:w-[500px] md:w-[400px]">
                      {description}
                    </div>
                    <div className="text-slate flex gap-3 p-3 text-[19px]">
                      <ul className="flex items-center gap-4 sm:flex-wrap md:flex-nowrap">
                        {library?.map((detail, index) => (
                          <div className="text-green ">
                            <li key={index} className="whitespace-nowrap">
                              {detail}
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-8">
                      <span>
                        {git ? (
                          <a href={link1}>
                            <VscGithubAlt className="text-slate text-[23px] hover:text-green cursor-pointer" />
                          </a>
                        ) : (
                          ""
                        )}
                      </span>
                      <span>
                        {site ? (
                          <a href={link2}>
                            <GoLinkExternal className="text-slate text-[23px] hover:text-green cursor-pointer" />
                          </a>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="img object-cover lg:w-[60%]  h-[400px] sm:hidden md:block">
                    <img
                      src={img}
                      alt=""
                      className="object-cover lg:w-[600px] md:w-[450px] h-[300px] rounded-lg ease-in-out grayscale hover:grayscale-0"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 80 }}
                  transition={{ type: "tween", duration: 0.6 }}
                  className="flex justify-center items-center relative my-[50px]"
                >
                  <div className="img object-cover  h-[400px] sm:hidden md:block">
                    <img
                      src={img}
                      alt=""
                      className="object-cover lg:w-[700px] md:w-[450px] h-[300px] rounded-lg ease-in-out grayscale hover:grayscale-0"
                    />
                  </div>{" "}
                  <div className="text  z-[50] -mt-[100px] lg:ml-[-100px]  md:ml-[-250px] sm:w-[300px] lg:w-[700px]">
                    <h1 className="text-green my-2 text-end">
                      Featured Project
                    </h1>
                    <h1 className="text-[24px] text-white roboto my-2 text-end">
                      {name}
                    </h1>

                    <div className="flex justify-end ">
                      <p className="roboto text-slate p-5 rounded-lg shadow-lg text-end bg-darknavy md:w-[500px] sm:w-[300px]">
                        {description}
                      </p>
                    </div>
                    <div className="text-slate flex gap-3 p-3 text-[19px] xl:justify-end">
                      <ul className="flex items-center gap-4 sm:flex-wrap md:flex-nowrap">
                        {library?.map((detail, index) => (
                          <div className="text-green flex flex-wrap ">
                            <li key={index} className="whitespace-nowrap ">
                              {detail}
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-8 xl:justify-end">
                      <span>
                        {git ? (
                          <a href={link1}>
                            <VscGithubAlt className="text-slate text-[23px] hover:text-green cursor-pointer" />
                          </a>
                        ) : (
                          ""
                        )}
                      </span>
                      <span>
                        {site ? (
                          <a href={link2}>
                            <GoLinkExternal className="text-slate text-[23px] hover:text-green cursor-pointer" />
                          </a>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
