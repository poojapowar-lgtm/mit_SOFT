import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/admin/dashboard",
        {
          headers: { Authorization: localStorage.getItem("token") }
        }
      );
      setData(res.data);
    };

    fetchData();
  }, []);

  return <h1>{data}</h1>;
}

export default Dashboard;