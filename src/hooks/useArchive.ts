import { Archive as ArchiveType } from "@/types";
import { useEffect, useState } from "react";

export const useArchive = () => {
  const [archive, setArchive] = useState<ArchiveType[]>();
  const [formdata, setFormdata] = useState({
    title: "",
    technologies: "",
    githubLink: "",
    demoLink: "",
    description: "",
  });

  useEffect(() => {
    const data2 = localStorage.archive;
    const archive: ArchiveType[] = JSON.parse(data2);
    setArchive(archive);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return {
    archive,
    setArchive,
    formdata,
    setFormdata,
    isModalOpen,
    setIsModalOpen,
  };
};
