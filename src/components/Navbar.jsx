import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-container">
      <h1 className="site-title"><Link className="link" to="/">Bookstore CMS</Link></h1>
      <ul className="navlist">
        <li><NavLink className="link" to="/books">Books</NavLink></li>
        <li><NavLink className="link" to="/categories">Categories</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
