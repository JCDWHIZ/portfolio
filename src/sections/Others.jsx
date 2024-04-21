import React from "react";
import Archivecard from "../components/Archivecard";

function Others() {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <div className="flex justify-center">
                    <div className="">
                      <div className=" flex flex-col justify-center items-center gap-5 text-center">
                        <h1 className="roboto font-bold text-white text-[40px]">
                          Other Projects
                        </h1>
                        {/* <h1 className="text-[19px] text-green hover:underline ease-in-out">
                          View the archive
                        </h1> */}
                      </div>

                      <div className="my-[70px] grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <Archivecard
                          name={"A Music Web App using Next 13"}
                          description={
                            'The project "A Music Web App using Next.js" is a comprehensive web application developed with Next.js, a popular React framework. This application aims to provide users with a seamless and interactive experience for exploring, discovering, and listening to music online.'
                          }
                          git1link={
                            "https://hithub.com/JCDWHIZ/A-Music-Web-App-using-Next-13"
                          }
                          git1={true}
                          library={[
                            "Next js",
                            "Tailwind",
                            "react-scroll",
                            "framer-motion",
                            "swiper",
                            "react-icons",
                            "react-prallax-mouse",
                            "swr",
                            "react-responsive",
                          ]}
                        />
                        <Archivecard
                          description={
                            'The project "Blog App API" is a backend application designed to serve as the server-side component for a blogging platform. Built using Node.js and Express.js, this API provides a robust and scalable foundation for managing blog posts, users, comments, and other essential features of a blogging platform.'
                          }
                          git1={true}
                          git1link={"https://github.com/JCDWHIZ/blog-app-API"}
                          git2={false}
                          name={"Blog API using node"}
                          library={["Node JS", "Express JS"]}
                          site={false}
                        />
                        <Archivecard
                          description={
                            'The project "A Chat Application using Ajax and PHP" is a web-based chat application built with a combination of front-end technologies such as Ajax (Asynchronous JavaScript and XML) and back-end scripting using PHP. This application enables real-time communication between users in a chat room environment.'
                          }
                          git1={true}
                          git1link={
                            "https://github.com/JCDWHIZ/A-Chat-Application-using-Ajax-and-PHP"
                          }
                          library={["Ajax", "PHP", "Mysql"]}
                          git2={false}
                          name={"A-Chat-Application-using-Ajax-and-PHP"}
                          site={false}
                        />
                        <Archivecard
                          description={
                            "A simple backend involving node js. This API performs all CRUD operations"
                          }
                          git1={true}
                          git1link={
                            "https://github.com/JCDWHIZ/REST-Api-using-node.js"
                          }
                          git2={false}
                          library={["Node JS", "Express JS", "nodemon", "uuid"]}
                          name={"REST API"}
                          site={false}
                        />
                        <Archivecard
                          description={
                            "A simple react app that utilizes REDUX as its state handler. This is a simple Todo app that does simple functions like add, edit and delete"
                          }
                          git1={true}
                          git1link={"https://github.com/JCDWHIZ/Redux-Todo"}
                          library={["React JS", "Vite", "Redux"]}
                          name={"Todo App - Redux"}
                          site={false}
                          git2={false}
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
    </div>
  );
}

export default Others;
