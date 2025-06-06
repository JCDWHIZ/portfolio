import Archivecard from "@/components/Archivecard";
import { motion } from "framer-motion";
import { parseStringArray } from "@/hooks";
import { Archive } from "@/types";

function Others() {
  const archive: Archive[] = JSON.parse(localStorage.archive);
  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ type: "tween", duration: 0.5 }}
            className=" flex flex-col justify-center items-center gap-5 text-center"
          >
            <h1 className="roboto font-bold text-white text-[40px]">
              Other Projects
            </h1>
            {/* <h1 className="text-[19px] text-green hover:underline ease-in-out">
                          View the archive
                        </h1> */}
          </motion.div>

          <div className="my-[70px] grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {archive?.map((item, index) => (
              <Archivecard
                key={index}
                name={item.title}
                description={item.description}
                git1link={item.githubLink}
                git1={item.githubLink ? true : false}
                library={parseStringArray(item.technologies)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Others;
