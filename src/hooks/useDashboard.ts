import { About } from "@/types";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const [about, setAbout] = useState<[About]>();
  const [formdata, setFormdata] = useState<{
    header: string;
    technologies: string;
    gmailLink: string;
    githubLink: string;
    description: string;
    story: string;
    image: string | null | File;
    linkedInLink: string;
  }>({
    header: about?.[0]?.header || "",
    technologies: about?.[0]?.technologies || "",
    gmailLink: about?.[0]?.gmailLink || "",
    githubLink: about?.[0]?.githubLink || "",
    description: about?.[0]?.description || "",
    story: about?.[0]?.story || "",
    image: about?.[0]?.image || null,
    linkedInLink: about?.[0]?.linkedInLink || "",
  });

  const loadData = (key: string) =>
    JSON.parse(localStorage.getItem(key) || "[]");

  useEffect(() => {
    const aboutData = loadData("about");
    if (aboutData.length > 0) {
      setAbout(aboutData);
      const {
        header,
        technologies,
        gmailLink,
        githubLink,
        description,
        story,
        image,
        linkedInLink,
      } = aboutData[0];
      setFormdata({
        header: header || "",
        technologies: technologies || "",
        gmailLink: gmailLink || "",
        githubLink: githubLink || "",
        description: description || "",
        story: story || "",
        image: image || null,
        linkedInLink: linkedInLink || "",
      });
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // `files` is of type `FileList | null`
    if (files && files[0]) {
      setFormdata({
        ...formdata,
        image: files[0], // Access the first file
      });
    }
  };

  const updateAbout = async () => {
    try {
      const formData = new FormData();
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
        `https://portfolio-backend-d7ca.onrender.com/about/${about?.[0]._id}`,
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

  return {
    about,
    setAbout,
    updateAbout,
    loadData,
    handleImageChange,
    formdata,
    setFormdata,
  };
};
