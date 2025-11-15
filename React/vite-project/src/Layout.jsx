import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
  <nav>
    <div>MyApp</div>
    <ul style={{}}>
      <li>
        <Link to="/" style={{}}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" style={{}}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" style={{}}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  <main>
    <Outlet />
  </main>
    </div>);
}