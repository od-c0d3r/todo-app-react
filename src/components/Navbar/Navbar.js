import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav id="nav">
        <span />
        <span />
        <span />
        <nav id="sideNav">
          <Link to="/about">About</Link>
          <Link to="/create-todo">Create Todo</Link>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
