import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import img from "../profile.jpeg";
import { VscGithubAlt } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import Archive from "../components/Archive";
import Projects from "../components/Projects";
function Dashboard() {
  const [about, setAbout] = useState([]);
  const [archive, setArchive] = useState([]);
  const [project, setProject] = useState([]);
  const [formdata, setFormdata] = useState({
    header: about?.[0]?.header || "",
    technologies: about?.[0]?.technologies || "",
    gmailLink: about?.[0]?.gmailLink || "",
    githubLink: about?.[0]?.githubLink || "",
    description: about?.[0]?.description || "",
    story: about?.[0]?.story || "",
    image: about?.[0]?.image || null,
    linkedInLink: about?.[0]?.linkedInLink || "",
  });
  useEffect(() => {
    const data = localStorage.getItem("about");
    const about = JSON.parse(data);
    setAbout(about);
    const data2 = localStorage.getItem("archive");
    const archive = JSON.parse(data2);
    setArchive(archive);
    const data3 = localStorage.getItem("project");
    const project = JSON.parse(data3);
    setProject(project);
    if (about && about.length > 0) {
      setFormdata({
        header: about[0].header || "",
        technologies: about[0].technologies || "",
        gmailLink: about[0].gmailLink || "",
        githubLink: about[0].githubLink || "",
        description: about[0].description || "",
        story: about[0].story || "",
        image: about[0].image || null,
        linkedInLink: about[0].linkedInLink || "",
      });
    }
  }, []);
  const baseurl = "https://portfolio-backend-d7ca.onrender.com/";
  function parseStringArray(input) {
    try {
      const parsedArray = JSON.parse(input);
      if (Array.isArray(parsedArray)) {
        return parsedArray;
      } else {
        throw new Error("Parsed result is not an array");
      }
    } catch (error) {
      console.error("Error parsing input string:", error);
      return [];
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormdata({
        ...formdata,
        image: e.target.files[0], // Set raw image file
      });
    }
  };

  const updateAbout = async () => {
    try {
      // Create a new FormData object
      const formData = new FormData();

      // Append the text fields to the FormData
      formData.append("header", formdata.header);
      formData.append("technologies", formdata.technologies);
      formData.append("gmailLink", formdata.gmailLink);
      formData.append("githubLink", formdata.githubLink);
      formData.append("linkedInLink", formdata.linkedInLink);
      formData.append("description", formdata.description);
      formData.append("story", formdata.story);
      if (formdata.image instanceof File) {
        formData.append("image", formdata.image);
      }

      const response = await fetch(
        `https://portfolio-backend-d7ca.onrender.com/about/${about[0]._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update about section");
      }

      const updatedAbout = await response.json();

      setAbout([updatedAbout]);
      localStorage.setItem("about", JSON.stringify([updatedAbout]));
      alert("About section updated successfully!");
    } catch (error) {
      console.error("Error updating about section:", error);
      alert("Failed to update about section.");
    }
  };

  return (
    <div className="bg-lightnavy h-fit">
      <div className="">
        <Navbar />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[80%]">
          <div className="mt-[10vh]">
            <h1 className="roboto md:text-[80px] lg:text-[90px] font-bold text-lightestslate sm:text-[35px]">
              Dashboard
            </h1>
          </div>

          <div className="">
            <div className="border-b border-green mt-[4vh] flex justify-between">
              <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
                About
              </h1>{" "}
              <button
                onClick={updateAbout}
                className="text-green px-4 py-2 bg-lightnavy rounded-lg"
              >
                UpdateAbout
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-[4vh]">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="roboto font-bold text-lightestslate text-[20px]"
                >
                  header
                </label>
                <input
                  type="text"
                  placeholder="header"
                  value={formdata.header}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      header: e.target.value,
                    });
                  }}
                  defaultValue={about?.[0]?.header}
                  className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="roboto font-bold text-lightestslate text-[20px]"
                >
                  Technologies
                </label>
                <input
                  type="text"
                  placeholder="Technologies"
                  value={formdata.technologies}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      technologies: e.target.value,
                    });
                  }}
                  defaultValue={about?.[0]?.technologies}
                  className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="roboto font-bold text-lightestslate text-[20px]"
                >
                  Gmail Link
                </label>
                <input
                  type="text"
                  placeholder="Gmail Link"
                  value={formdata.gmailLink}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      gmailLink: e.target.value,
                    });
                  }}
                  defaultValue={about?.[0]?.gmailLink}
                  className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="roboto font-bold text-lightestslate text-[20px]"
                >
                  Github Link
                </label>
                <input
                  type="text"
                  placeholder="Github Link"
                  value={formdata.githubLink}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      githubLink: e.target.value,
                    });
                  }}
                  defaultValue={about?.[0]?.githubLink}
                  className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="roboto font-bold text-lightestslate text-[20px]"
                >
                  LinkedIn Link
                </label>
                <input
                  type="text"
                  placeholder="LinkedIn Link"
                  value={formdata.linkedInLink}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      linkedInLink: e.target.value,
                    });
                  }}
                  defaultValue={about?.[0]?.linkedInLink}
                  className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="roboto font-bold text-lightestslate text-[20px]"
                >
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Description"
                  rows="4"
                  value={formdata.description}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      description: e.target.value,
                    });
                  }}
                  defaultValue={about?.[0]?.description}
                  className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="roboto font-bold text-lightestslate text-[20px]"
                >
                  Story
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Story..."
                  rows="4"
                  value={formdata.story}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      story: e.target.value,
                    });
                  }}
                  defaultValue={about?.[0]?.story}
                  className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent "
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="roboto font-bold text-lightestslate text-[20px]">
                  Image
                </h1>
                <div className="">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageChange} // Update image on file selection
                  />
                  <img
                    src={`${baseurl}images/${formdata.image}`}
                    alt=""
                    className="h-[20vh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <Archive />

          <Projects />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
