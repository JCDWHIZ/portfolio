import React from "react";
import img from "../profile.jpeg";
import { TiMediaPlayOutline } from "react-icons/ti";

function About() {
  return (
    <div>
      <section className="lg:w-[80%]" id="about">
        <div className="">
          <div className="">
            <div className="flex justify-center">
              <div className="">
                <div className="flex items-center gap-4  sm:justify-center md:justify-start">
                  <h1 className="sm:text-[20px] md:text-[40px] text-green">
                    01.
                  </h1>
                  <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
                    About Me
                  </h1>
                  <span className="sm:w-[170px] md:w-[350px] border-b border-slate"></span>
                </div>
                <div className="my-[50px] md:w-[700px] sm:w-[500px] flex gap-3 md:flex-nowrap sm:flex-wrap sm:justify-center md:justify-between">
                  <div className="text-slate text-[18px] sm:w-[60%] md:w-[60%] lg:w-[80%] flex flex-col justify-center">
                    <p className="font-sans">
                      A Software Developer who loves to transform ideas into
                      reality using code. I am skilled in creating responsive
                      web applications with Html, css and front end frameworks
                      such as React. I am also skilled in creating high
                      performance APIs with back end technologies such as with
                      nodejs and laravel, and with Databases such as Mysql and
                      Mongo DB. My passion for programming drives me to get
                      better at better at delivering quality services
                    </p>
                    <p className="my-3 font-sans">
                      Here are the technologies I’ve been working with recently:
                    </p>

                    <ul className="my-3 grid grid-cols-2 md:w-[500px] sm:w-[450px]">
                      <li className="flex items-center gap-3 ">
                        <TiMediaPlayOutline className="text-green text-[10px]" />{" "}
                        Javascript
                      </li>
                      <li className="flex items-center gap-3">
                        <TiMediaPlayOutline className="text-green text-[10px]" />{" "}
                        Node Js
                      </li>
                      <li className="flex items-center gap-3 ">
                        <TiMediaPlayOutline className="text-green text-[10px]" />{" "}
                        PHP
                      </li>
                      <li className="flex items-center gap-3 ">
                        <TiMediaPlayOutline className="text-green text-[10px]" />{" "}
                        Laravel
                      </li>
                      <li className="flex items-center gap-3 ">
                        <TiMediaPlayOutline className="text-green text-[10px]" />{" "}
                        SASS
                      </li>
                      <li className="flex items-center gap-3 ">
                        <TiMediaPlayOutline className="text-green text-[10px]" />{" "}
                        MySQL
                      </li>
                      <li className="flex items-center gap-3">
                        <TiMediaPlayOutline className="text-green text-[10px]" />
                        Tailwind
                      </li>
                    </ul>
                  </div>
                  <div className=" h-[400px]">
                    <div className="object-cover sm:w-[270px] md:w-[350px] h-full relative ease-in-out">
                      <img
                        src={img}
                        alt="profile"
                        className="object-cover h-full w-full z-[100] grayscale hover:grayscale-0 "
                      />
                      <div className="border border-green rounded-lg sm:w-[270px] md:w-[350px] h-[400px] ease-in-out z-[-1] mt-[-380px] ml-[20px]"></div>
                    </div>
                  </div>
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
