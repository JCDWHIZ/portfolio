import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "framer-motion";

function Footer({ about }) {
  const handleEmailClick = (email) => {
    const subject = "Hello!";
    const body = "This is the body of the email.";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", delay: 1.9 }}
        className=""
      >
        <div className="sm:py-[100px] lg:py-0">
          <div className="md:fixed bottom-0 left-11">
            <div className="flex md:flex-col sm:gap-[190px] md:gap-10 justify-center items-center">
              <a
                href={about?.[0]?.githubLink}
                className="transition-all duration-300 transform hover:-translate-y-3"
              >
                <VscGithubAlt className="text-[25px] text-slate hover:text-green" />
              </a>
              <a
                href={about?.[0]?.linkedInLink}
                className="transition-all duration-300 transform hover:-translate-y-3"
              >
                <SlSocialLinkedin className="text-[25px] text-slate hover:text-green" />
              </a>
              <span className="border border-slate sm:hidden  md:block h-[130px]"></span>
            </div>
          </div>
          <div className="fixed bottom-0 lg:right-[0px] md:right-[-40px] sm:hidden md:block">
            <div className="flex flex-col justify-center items-center gap-[100px]">
              <span
                className="text-slate rotate-90 sss hover:text-green transition-all duration-300 transform hover:-translate-y-3"
                onClick={() => {
                  handleEmailClick(about?.[0]?.gmailLink);
                }}
              >
                {about?.[0]?.gmailLink}
              </span>
              <span className="border border-slate h-[130px]"></span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
