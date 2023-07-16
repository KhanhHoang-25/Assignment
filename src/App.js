import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TopNews from "./pages/TopNews";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route exact path="/home" element={<Home />} />{" "}
          <Route exact path="/top" element={<TopNews />} />{" "}
          <Route exact path="/add" element={<TopNews />} />
          <Route exact path="/update/:id" element={<TopNews />} />
          <Route exact path="/delete/:id" element={<TopNews />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
