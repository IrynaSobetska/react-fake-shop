import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/react-fake-shop/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/react-fake-shop/smartphones">Smartphones</NavLink>
          </li>
          <li>
            <NavLink to="/react-fake-shop/laptops">Laptops</NavLink>
          </li>
          <li>
            <NavLink to="/react-fake-shop/lighting">Lighting</NavLink>
          </li>
          <li>
            <NavLink to="/react-fake-shop/furniture">Furniture</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
