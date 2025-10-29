import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing  from "./pages/landing";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Giftbox from "./pages/giftbox";
import Birthdays from "./pages/birthdays"; 
import Chocoboqute from "./pages/ChocoBoqute";
import Shabkatrays from "./pages/shabkatrays";
import Graduation from "./pages/graduation";
import Minibouquets from "./pages/minibouquets";
import Prodectdetatlis from "./pages/prodectdetatlis";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<Prodectdetatlis />} />
        <Route path="/giftbox" element={<Giftbox />} />
        <Route path="/birthdays" element={<Birthdays />} />
        <Route path="/chocoBoqute" element={<Chocoboqute />} />
        <Route path="/minibouquets" element={<Minibouquets />} />
        <Route path="/shabkatrays" element={<Shabkatrays />} />
        <Route path="/graduation" element={<Graduation />} />
      </Routes>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      <Footer />
    </Router>
  );
}
export default App;


