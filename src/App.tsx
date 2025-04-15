import { useEffect, useState } from "react";
import "./App.css";
import Mainroute from "@/routes";
import Loading from "@/components/Loading";
import { fetchAllData } from "./hooks";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllData(setLoading);
  }, []);
  if (loading) {
    return <Loading loading={loading} />;
  }
  return <Mainroute />;
}

export default App;
