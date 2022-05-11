//NPM packages
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { MdModeEditOutline } from "react-icons/md";

//Project Files
import { useUser } from "../state/UserProvider";

export default function CourseCard({ course, onDelete }) {
  const { id, name, description, imgUrl } = course;
  const { user } = useUser();

  return (
    <li>
      <img src={imgUrl} alt="" />
      <main>
        <h3>{name}</h3>
        <p>{description}</p>
      </main>
      <footer>
        {user.role === "teacher" && (
          <button className="delete-btn" onClick={() => onDelete(id)}>
            <ImBin />
          </button>
        )}
        {user.role === "teacher" && (
          <Link className="round-btn" to={`/add-course/${id}`}>
            <MdModeEditOutline />
          </Link>
        )}
        <Link className="round-btn" to={`/course-page/${id}`}>
          <FaArrowRight />
        </Link>
      </footer>
    </li>
  );
}
