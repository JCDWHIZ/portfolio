import { createArchive, fetchWithToken } from "@/services";
import { Archive } from "@/types";

export const handleCreateArchive = (
  e: React.FormEvent<HTMLFormElement>,
  formData: {
    title: string;
    technologies: string;
    githubLink: string;
    demoLink: string;
    description: string;
  },
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setFormdata: React.Dispatch<
    React.SetStateAction<{
      title: string;
      technologies: string;
      githubLink: string;
      demoLink: string;
      description: string;
    }>
  >
) => {
  try {
    e.preventDefault();
    createArchive(formData);
    setIsModalOpen(false);
    setFormdata({
      title: "",
      technologies: "",
      githubLink: "",
      demoLink: "",
      description: "",
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteArchive = (
  id: string,
  archive: Archive[],
  setArchive: React.Dispatch<React.SetStateAction<Archive[] | undefined>>
) => {
  try {
    fetchWithToken(`/archive/${id}`, "DELETE", null, {}, false);
    const newArchive = archive.filter((p) => p._id !== id);
    setArchive(newArchive);
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};
