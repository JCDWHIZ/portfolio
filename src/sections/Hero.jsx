import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-[80%]">
        <div className="">
          <div className="flex justify-center sm:items-center md:items-start h-[100vh]">
            <div className="sm:w-[290px] md:w-[550px] lg:w-[700px] lg:mt-[120px] md:mt-[300px] sm:p-8 md:p-0">
              <h1 className="text-green text-[19px]">Hi, my name is</h1>

              <h1 className="roboto md:text-[80px] lg:text-[90px] font-bold text-lightestslate sm:text-[35px]">
                Ugboh Jesse.
              </h1>
              <h1 className="my-3 roboto md:text-[55px] lg:text-[80px] text-slate font-bold leading-[45px] lg:whitespace-nowrap sm:text-[30px] sm:leading-[1]">
                I build things for the web.
              </h1>
              <p className="text-slate font-sans font-semibold text-[17px] sm:w-[320px] md:w-[600px] pt-7 ">
                I'm Jesse, a Full Stack Software Developer. I love to transform
                ideas into reality using code and building exquisite and highly
                performant applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
