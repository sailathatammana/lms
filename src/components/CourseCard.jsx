import { Link } from "react-router-dom";

export default function CourseCard({ course, onDelete }) {
  const { id, name, description, imgUrl } = course;

  return (
    <div>
      <li>
        <img src={imgUrl} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/course-page/${id}`}>Go</Link>
        <br />
        <Link to={`/add-course/${id}`}>Edit</Link>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    </div>
  );
}
