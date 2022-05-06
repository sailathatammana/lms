import { FaBookOpen } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { MdDoubleArrow } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <span className="nav-link">
            <span className="link-text logo-text">Tech Web</span>
            <MdDoubleArrow />
          </span>
        </li>
        <li>
          <span className="nav-link">
            <FaBookOpen />
            <span className="link-text">Courses</span>
          </span>
        </li>
        <li>
          <span className="nav-link">
            <FaVideo />
            <span className="link-text">Zoom</span>
          </span>
        </li>
        <li>
          <span className="nav-link">
            <FaCalendarAlt />
            <span className="link-text">Calendar</span>
          </span>
        </li>
        <li>
          <span className="nav-link">
            <GrLogout />
            <span className="link-text">SignOut</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
