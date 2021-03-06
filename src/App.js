import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Share/Header/Header";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Share/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import SingUp from "./Pages/Login/SingUp/SingUp";
import About from "./Pages/Login/About/About";
import Footer from "./Pages/Share/Footer/Footer";
import Blog from "./Pages/Home/Home/Blog/Blog";
import CheekOut from "./Pages/CheekOut/CheekOut";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/cheekOut/:cheekOut"
          element={
            <RequireAuth>
              <CheekOut></CheekOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SingUp></SingUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
