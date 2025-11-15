// import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
      <>
        <Link to="/Home">
          <button>Home</button>
        </Link>
        <Link to="/About">
          <button>About</button>
        </Link>
        <Link to="/Contact">
          <button>Contact</button>
        </Link>
      </>
    );
}