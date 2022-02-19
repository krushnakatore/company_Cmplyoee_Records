import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../navbar/Navbar";
import "./details.css";

export default function Details() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar">
      <Navbar />
      <div className="navbarWrapper"></div>
    </div>
  );
}
