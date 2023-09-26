import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/smartphones">Smartphones</NavLink>
          </li>
          <li>
            <NavLink to="/laptops">Laptops</NavLink>
          </li>
          <li>
            <NavLink to="/lighting">Lighting</NavLink>
          </li>
          <li>
            <NavLink to="/furniture">Furniture</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
