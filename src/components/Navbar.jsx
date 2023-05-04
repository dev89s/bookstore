import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <h1><Link to="/">Bookstore CMS</Link></h1>
      <ul className="navlist">
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </>
  );
}

export default Navbar;
