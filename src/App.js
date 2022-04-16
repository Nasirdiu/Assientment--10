import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Share/Header/Header";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Share/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import SingUp from "./Pages/Login/SingUp/SingUp";
import About from "./Pages/Login/About/About";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SingUp></SingUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
