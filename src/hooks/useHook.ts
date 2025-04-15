import { fetchWithToken } from "@/services";

export const fetchAllData = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    const [response1, response2, response3] = await Promise.all([
      fetchWithToken("/about", "GET", null, {}, false),
      fetchWithToken("/archive", "GET", null, {}, false),
      fetchWithToken("/project", "GET", null, {}, false),
    ]);
    localStorage.about = JSON.stringify(response1);
    localStorage.archive = JSON.stringify(response2);
    localStorage.project = JSON.stringify(response3);
    setLoading(false);
    console.log(response1, response2, response3);
    // console.log(test);
  } catch (err) {
    console.error("Error fetching data:", err);
    // setError(err.message);
    setLoading(false);
  }
};

export const parseStringArray = (input: string) => {
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
};

export const handleEmailClick = (email: string) => {
  const subject = "Hello!";
  const body = "This is the body of the email.";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

export const startListening = (
  setIsListening: React.Dispatch<React.SetStateAction<boolean>>,
  setTranscript: React.Dispatch<React.SetStateAction<string>>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setOpen(true);
  setIsListening(true);
  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = (event: { results: string | any[] }) => {
    const last = event.results.length - 1;
    const speechToText = event.results[last][0].transcript;
    setTranscript(speechToText);

    if (speechToText.toLowerCase().includes("contact")) {
      handleContact();
    } else if (speechToText.toLowerCase().includes("about")) {
      handleAbout();
    } else if (speechToText.toLowerCase().includes("project")) {
      handleProjects();
    } else if (speechToText.toLowerCase().includes("download resume")) {
      handleDownloadResume();
    }
  };

  recognition.start();
};

const handleContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleAbout = () => {
  const contactSection = document.getElementById("about");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleProjects = () => {
  const contactSection = document.getElementById("project");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
export const handleDownloadResume = () => {
  const pdfFilePath = "cv.pdf";
  const link = document.createElement("a");
  link.href = pdfFilePath;
  link.download = "cv.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
