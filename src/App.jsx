import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Smartphones from "./components/routes/Smartphones";
import Laptops from "./components/routes/Laptops";
import Lighting from "./components/routes/Lighting";
import Furniture from "./components/routes/Furniture";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <h1>Fake store</h1>
        <Navbar />
        <Routes>
          <Route path="/react-fake-shop/" element={<Home />} />
          <Route
            path="/react-fake-shop/smartphones"
            element={<Smartphones />}
          />
          <Route path="/react-fake-shop/laptops" element={<Laptops />} />
          <Route path="/react-fake-shop/lighting" element={<Lighting />} />
          <Route path="/react-fake-shop/furniture" element={<Furniture />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
