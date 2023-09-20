import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Card from "./pages/Cart";
import Help from "./pages/Help";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";


function App() {
  return (
    <div className=" w-screen font-[poppins]">
      <Header />
      <Routes>
        <Route path="/" exact>
          <Route index element={<Home />} />
          <Route path="card" element={<Card />} />
          <Route path="help" element={<Help />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favourites" element={<Favourites />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
