import React from "react";

function Contact() {
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
      <section id="contact" className="">
        <div className=" md:h-[60vh] lg:h-[94vh] pt-[40px]">
          <div className="flex justify-center items-center flex-col gap-[50px]">
            <div className="flex flex-col text-center gap-4 lg:w-[48%] md:w-[70%] sm:w-[70%]">
              <h1 className="text-[19px] text-green">03. What's Next</h1>
              <h1 className="roboto sm:text-[40px] md:text-[70px] font-bold text-lightestslate">
                Get In Touch
              </h1>
              <h1 className="roboto text-slate md:text-[19px] text-center sm:text-[15px]">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from you. Simply
                click the button below send me an email.
              </h1>
            </div>
            <button
              onClick={handleEmailClick}
              className="py-4 px-8 border border-green text-green rounded-lg hover:bg-green/10 text-[20px]"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
