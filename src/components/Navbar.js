import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-bar">
      <h1>Math Magicians </h1>
      <ul className="nav-ul">
        <li className="nav-child">
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? 'white' : '#4f2f2f',
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
              color: isActive ? 'white' : '#4f2f2f',
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
              color: isActive ? 'white' : '#4f2f2f',
            })}
            to="/quote"
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
