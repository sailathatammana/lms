import { NavLink } from "react-router-dom";

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
          <span className="nav-link">
            <GrLogout />
            <span className="link-text">SignOut</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
