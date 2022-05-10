import { Link } from "react-router-dom";

export default function LoginNavBar() {
  return (
    <nav className="landing-bar">
      <h1>Tech Web</h1>
      <Link className="button-secondary" to="/sign-in">
        Sign In
      </Link>
    </nav>
  );
}
