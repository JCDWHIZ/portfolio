import { About } from "@/types";
import { motion } from "framer-motion";

function Hero() {
  const about: [About] = JSON.parse(localStorage.about);
  return (
    <div>
      <div className="w-[80%]">
        <div className="">
          <div className="flex justify-center sm:items-center md:items-start h-[100vh]">
            <div className="sm:w-[290px] md:w-[550px] lg:w-[700px] lg:mt-[120px] md:mt-[300px] sm:p-8 md:p-0">
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ type: "tween", delay: 1.3 }}
                className="text-green text-[19px]"
              >
                Hi, my name is
              </motion.h1>

              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ type: "tween", delay: 1.4 }}
                className="roboto md:text-[80px] lg:text-[90px] font-bold text-lightestslate sm:text-[35px]"
              >
                Jesse Ugboh.
              </motion.h1>
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ type: "tween", delay: 1.5 }}
                className="my-3 roboto md:text-[55px] lg:text-[80px] text-slate font-bold leading-[45px] lg:w-[1240px] sm:text-[30px] sm:leading-[1]"
              >
                {about?.[0]?.header}
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ type: "tween", delay: 1.6 }}
                className="text-slate font-sans font-semibold text-[17px] sm:w-[320px] md:w-[600px] pt-7 "
              >
                {about?.[0]?.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
