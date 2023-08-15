import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Math Magicians </h1>
      <ul className="nav-ul">
        <li className="nav-list">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator" className="nav-link">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quotes" className="nav-link link-quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
