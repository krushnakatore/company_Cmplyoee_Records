import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../navbar/Navbar";
import "./homepage.css";

export default function Homepage() {
  const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   axios.post());
  // });
  console.log("userhome", user.employee[0].employee_Name);

  return (
    <div className="homepage">
      <Navbar />
      <div className="homepageWrapper">
        <div className="leftDiv">
          {user.employee.map((e) => {
            return (
              <Link to="/details">
                <li key={e._id} props={e}>
                  {e.employee_Name}
                </li>
              </Link>
            );
          })}
        </div>

        <div className="rightDiv">
          Add Employees form
          <br />
          <input placeholder="employee name" />
          <br />
          <input placeholder="employee name" />
          <br />
          <input placeholder="employee name" />
          <br />
          <input placeholder="employee name" />
          <br />
          <input placeholder="employee name" />
          <br />
        </div>
      </div>
    </div>
  );
}
