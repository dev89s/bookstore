import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-container">
      <h1 className="site-title"><Link className="link" to="/">Bookstore CMS</Link></h1>
      <ul className="navlist">
        <li><Link className="link" to="/books">Books</Link></li>
        <li><Link className="link" to="/categories">Categories</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
