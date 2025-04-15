import { useEffect, useState } from "react";
import "./App.css";
import Mainroute from "@/routes";
import LoadingS from "@/components/Loading";
import { fetchAllData } from "@/hooks";

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAllData(setLoading);
  }, []);
  if (loading) {
    return <LoadingS loading={loading} />;
  }
  return <Mainroute />;
}

export default App;
