import { Link } from "react-router-dom";
import { useUser } from "../state/UserProvider";

export default function CourseCard({ course, onDelete }) {
  const { id, name, description, imgUrl } = course;
  const { user } = useUser();

  return (
    <div>
      <li>
        <img src={imgUrl} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/course-page/${id}`}>Go</Link>
        <br />
        {user.role === "teacher" && <Link to={`/add-course/${id}`}>Edit</Link>}
        {user.role === "teacher" && (
          <button onClick={() => onDelete(id)}>Delete</button>
        )}
      </li>
    </div>
  );
}
