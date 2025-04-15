import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithToken } from "@/services";
import { Project } from "@/types";

export const useProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState<Project[]>([]);
  const [formdata, setFormdata] = useState({
    title: "",
    technologies: "",
    githubLink: "",
    demoLink: "",
    image: null,
    description: "",
  });
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      const Data = new FormData();
      Data.append("title", formdata.title);
      Data.append("technologies", formdata.technologies);
      Data.append("githubLink", formdata.githubLink);
      Data.append("demoLink", formdata.demoLink);
      Data.append("description", formdata.description);
      if (formdata.image) {
        Data.append("image", formdata.image);
      }

      try {
        const response = await fetch(
          "https://portfolio-backend-d7ca.onrender.com/project",
          {
            method: "POST",
            body: Data,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 401) {
          navigate("/admin");
        } else {
          setIsModalOpen(false);
          setFormdata({
            title: "",
            technologies: "",
            githubLink: "",
            demoLink: "",
            image: null,
            description: "",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (id: string) => {
    try {
      fetchWithToken(`/project/${id}`, "DELETE", null, {}, false);
      const newProjects = project.filter((p) => p._id !== id);
      setProject(newProjects);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
  useEffect(() => {
    const data3 = localStorage.project;
    const project = JSON.parse(data3);
    setProject(project);
  }, []);

  return {
    isModalOpen,
    setIsModalOpen,
    project,
    setProject,
    formdata,
    setFormdata,
    handleCreateProject,
    handleDelete,
  };
};
