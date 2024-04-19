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
