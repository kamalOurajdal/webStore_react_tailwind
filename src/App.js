import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" w-screen font-[poppins]">
      
      <Header />
      <Routes>
        <Route path="/" exact>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
