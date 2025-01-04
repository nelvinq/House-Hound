import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="https://static.wixstatic.com/media/3ec94b_02f00099be0a4b93af7b06242a69a6d0~mv2.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="menu-item">
            <Link to="/">Search Properties</Link>
          </li>
          <li className="menu-item">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;