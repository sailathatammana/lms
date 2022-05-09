//NPM Packages
import { NavLink, useHistory } from "react-router-dom";

//Icons
import { FaBookOpen } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { MdDoubleArrow } from "react-icons/md";
import { useAuth } from "../state/AuthProvider";
import { logout } from "../scripts/Authentication";

export default function NavBar() {
  const { setIsLogged } = useAuth();
  const history = useHistory();
  async function onLogout() {
    await logout();
    setIsLogged(false);
    history.push("/");
  }
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <NavLink to="/" className="nav-link">
            <span className="link-text logo-text">Tech Web</span>
            <MdDoubleArrow />
          </NavLink>
        </li>
        <li>
          <a href="/student" className="nav-link">
            <FaBookOpen />
            <span className="link-text">Courses</span>
          </a>
        </li>
        <li>
          <a
            href="https://zoom.us/"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaVideo />
            <span className="link-text">Zoom</span>
          </a>
        </li>
        <li>
          <a
            href="https://calendar.google.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            <FaCalendarAlt />
            <span className="link-text">Calendar</span>
          </a>
        </li>
        <li>
          <button onClick={onLogout} className="nav-link">
            <GrLogout />
            <span className="link-text">SignOut</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
