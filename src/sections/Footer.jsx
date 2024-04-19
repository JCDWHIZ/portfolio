import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  const handleEmailClick = () => {
    const email = "recipient@example.com";
    const subject = "Hello!";
    const body = "This is the body of the email.";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div>
      <div className="">
        <div className="py-[100px]">
          <div className="md:fixed bottom-0 left-11">
            <div className="flex md:flex-col sm:gap-[190px] md:gap-10 justify-center items-center">
              <a
                href="https://github.com/JCDWHIZ"
                className="transition-all duration-300 transform hover:-translate-y-3"
              >
                <VscGithubAlt className="text-[25px] text-slate hover:text-green" />
              </a>
              <a
                href="https://linkedin.com/in/jcnexus"
                className="transition-all duration-300 transform hover:-translate-y-3"
              >
                <SlSocialLinkedin className="text-[25px] text-slate hover:text-green" />
              </a>
              <span className="border border-slate sm:hidden  md:block h-[130px]"></span>
            </div>
          </div>
          <div className="fixed bottom-0 lg:right-11 md:right-[-40px] sm:hidden md:block">
            <div className="flex flex-col justify-center items-center gap-[100px]">
              <span
                className="text-slate rotate-90 sss hover:text-green transition-all duration-300 transform hover:-translate-y-3"
                onClick={handleEmailClick}
              >
                jesseugboh@gmail.com
              </span>
              <span className="border border-slate h-[130px]"></span>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
