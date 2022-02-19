import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Details from "./components/detailspage/Details";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Homepage /> : <Signin />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
