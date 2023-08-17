import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import './styles.css';

function Navbar() {
  return (
    <nav className="nav-bar">
      <h1>Math Magicians </h1>
      <ul className="nav-ul">
        <li className="nav-child">
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#fed136' : '#fff;',
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="nav-child">
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#fed136' : '#fff;',
            })}
            to="/calculator"
          >
            Calculator
          </NavLink>
        </li>

        <li className="nav-child">
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#fed136' : '#fff;',
            })}
            to="quotes"
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
