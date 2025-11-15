import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/About">
        <button>Go to About Page</button>
      </Link>
      <Link to="/Contact">
        <button>Go to Contact Page</button>
      </Link>
    </>
  );
}
