import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../navbar/Navbar";
import "./details.css";

export default function Details() {
  const params = useParams();
  const [data, setData] = useState([]);
  console.log(params);

  useEffect(() => {
    const data1 = async () => {
      const res = await axios.get(
        `http://localhost:8888/employee/${params.username}`
      );
      setData(res.data);
      // console.log(res.data);
    };
    data1();
  }, [params.username]);
  // useEffect();
  return (
    <div className="navbar">
      <Navbar />
      <div className="navbarWrapper">
        {data.map((e) => {
          return <li>salaries:{e}</li>;
        })}
      </div>
    </div>
  );
}
