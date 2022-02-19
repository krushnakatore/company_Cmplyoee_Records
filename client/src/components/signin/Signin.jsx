import { useState, useRef } from "react";
import "./signin.css";

import { makeLogin } from "../../apilogin";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
export default function Signin() {
  const { dispatch, user } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const handleClick = async (e) => {
    e.preventDefault();

    // console.log(email.current.value, password.current.value);
    makeLogin(
      { email_id: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log("user", user);
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="signin">
      <div className="signinWrapper">
        <h2>Signin Form</h2>
        <form onSubmit={handleClick}>
          <input
            className="email"
            placeholder="Enter your email"
            type="email"
            name="email_id"
            ref={email}
          />
          <br />
          <input
            className="password"
            placeholder="Enter your password"
            type="password"
            name="password"
            ref={password}
          />
          <br />
          <input type="submit" />
          <br />
        </form>
      </div>
    </div>
  );
}

// const URL = "http://localhost:5000/books";
// const fetchHandler = async () => {
//     return await axios.get(URL).then((res) => res.data);
//   };
//   const Books = () => {
//     const [books, setBooks] = useState();
//     const [currPage, setCurrPage] = useState(1);
//     const [bookPerPage, setBookPerPage] = useState(5);
//     useEffect(() => {
//       fetchHandler().then((data) => setBooks(data.books));
//     }, []);
//     console.log("books", books);
