import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Mainroute from "./routes/Mainroute";
import fetchWithToken from "./components/Service";

function App() {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(null);
  const [archive, setArchive] = useState(null);
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [response1, response2, response3] = await Promise.all([
        fetchWithToken(
          "https://portfolio-backend-d7ca.onrender.com/about",
          "GET"
        ),
        fetchWithToken(
          "https://portfolio-backend-d7ca.onrender.com/archive",
          "GET"
        ),
        fetchWithToken(
          "https://portfolio-backend-d7ca.onrender.com/project",
          "GET"
        ),
      ]);
      localStorage.setItem("about", JSON.stringify(response1));
      localStorage.setItem("archive", JSON.stringify(response2));
      localStorage.setItem("project", JSON.stringify(response3));
      setAbout(response1);
      setArchive(response2);
      setProject(response3);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 3000);

    fetchData();
    // return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading loading={loading} />;
  }
  return <Mainroute about={about} project={project} archive={archive} />;
}

export default App;
