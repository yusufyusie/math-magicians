import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Math Magicians </h1>
      <ul className="nav-ul">
        <li className="nav-list">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/calculator" className="nav-link">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes" className="nav-link link-quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
