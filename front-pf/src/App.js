import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Excursiones from "./pages/Excursiones/Excursiones";
import "bootstrap/dist/css/bootstrap.min.css"
import Destinations from './pages/Destinations/Destinations';
import PageUser from "./pages/PageUser/PageUser";
import InfoCard from "./pages/InfoCard/InfoCard";
import Hotels from './pages/Hotels/Hotels.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/excursiones" element={<Excursiones/>}/>
        <Route path="/detail/:id" element={<InfoCard/>}/>
        <Route path="/user" element={<PageUser />} />
        <Route path="/hotels" element={<Hotels/>}/>
      </Routes>
    </div>
  );
}

export default App;
