import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HouseList from "../house/HouseList";
import HouseEdit from "../house/HouseEdit";
import HouseAdd from "../house/HouseAdd";
import HouseDetail from "../house/HouseDetail";
import Header from "./Header";
import MapBasedAPIs from "../house/GetMapBasedAPIs";
import About from "../house/About";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <Routes>
          <Route path="/" element={<HouseList />}></Route>
          <Route path="/house/add" element={<HouseAdd />}></Route>
          <Route path="/house/edit/:id" element={<HouseEdit />}></Route>
          <Route path="/house/:id" element={<HouseDetail />}></Route>
          <Route path="/MapBasedAPIs" element={<MapBasedAPIs/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
