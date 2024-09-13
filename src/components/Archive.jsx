import React, { useEffect, useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import fetchWithToken from "./Service";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, formdata, setFormdata, handleSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-lightnavy p-6 rounded-lg w-[90%] max-w-lg shadow-lg relative h-[100vh] overflow-scroll">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-green text-[20px] hover:underline"
        >
          Close
        </button>
        <div className="flex flex-col gap-4">
          {/* Title Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              value={formdata.title}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  title: e.target.value,
                });
              }}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Technologies Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
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
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Github Link Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
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
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Demo Link Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Demo Link
            </label>
            <input
              type="text"
              placeholder="Demo Link"
              value={formdata.demoLink}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  demoLink: e.target.value,
                });
              }}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Description Textarea */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows="4"
              value={formdata.description}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  description: e.target.value,
                });
              }}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Archive button */}
          <button
            className="mt-4 py-2 px-4 bg-green text-lightestslate rounded-lg hover:bg-green/90"
            type="submit"
            onClick={handleSubmit}
          >
            Archive
          </button>
        </div>
      </div>
    </div>
  );
};

function Archive() {
  const [archive, setArchive] = useState([]);
  const [formdata, setFormdata] = useState({
    title: "",
    technologies: "",
    githubLink: "",
    demoLink: "",
    description: "",
  });

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      fetchWithToken(
        "https://portfolio-backend-d7ca.onrender.com/archive",
        "POST",
        formdata
      )
        .then((data) => {
          setIsModalOpen(false);
          setFormdata({
            title: "",
            technologies: "",
            githubLink: "",
            demoLink: "",
            description: "",
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      fetchWithToken(
        `https://portfolio-backend-d7ca.onrender.com/archive/${id}`,
        {
          method: "DELETE",
          headers,
        }
      );
      const newArchive = archive.filter((p) => p._id !== id);
      setArchive(newArchive);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  useEffect(() => {
    const data2 = localStorage.getItem("archive");
    const archive = JSON.parse(data2);
    setArchive(archive);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="">
        <div className="border-b border-green mt-[4vh] flex justify-between">
          <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
            Archive
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-green px-4 py-2 bg-lightnavy rounded-lg"
          >
            Create archive
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formdata={formdata}
          setFormdata={setFormdata}
          handleSubmit={handleSubmit}
        />

        <div className="mt-[10vh]">
          <table className="w-full">
            <thead className="">
              <tr className="">
                <th className="roboto font-bold text-lightestslate text-[20px] text-left py-2 border-b border-green">
                  Title
                </th>
                <th className="roboto font-bold text-lightestslate text-[20px] text-left border-b border-green">
                  Description
                </th>
                <th className="roboto font-bold text-lightestslate text-[20px] text-left border-b border-green">
                  Technologies
                </th>
                <th className="roboto font-bold text-lightestslate text-[20px] text-left border-b border-green w-[6%]">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {archive?.map((item, index) => (
                <tr key={index}>
                  <td className="roboto text-[18px] font-bold text-white py-2">
                    {item.title}
                  </td>
                  <td className="roboto text-[18px] font-bold text-white py-2">
                    {item.description}
                  </td>
                  <td className="text-slate ">Test Technologies 1</td>
                  <td className="flex gap-2 py-2">
                    {item.githubLink ? (
                      <a href={item.githubLink}>
                        <VscGithubAlt className="text-slate hover:text-green text-[23px]" />
                      </a>
                    ) : (
                      <h1>-</h1>
                    )}
                    <span onClick={() => handleDelete(item._id)}>
                      <MdDeleteForever className="text-slate hover:text-green text-[23px]" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Archive;
