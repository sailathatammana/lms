import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { useCourse } from "../state/CoursesProvider";
import { deleteDocument } from "../scripts/firestore";

export default function Dashboard() {
  const { courses, dispatchCourses } = useCourse();

  async function onDelete(id) {
    await deleteDocument("courses", id);
    const updated = courses.filter((course) => course.id !== id);
    alert("deleted");
    dispatchCourses({ type: "SET_COURSES", payload: updated });
  }

  const course = courses.map((course) => (
    <CourseCard key={course.id} onDelete={onDelete} course={course} />
  ));
  return (
    <div>
      <h1>CoursesPage</h1>
      <ul>{course}</ul>
      <Link to="/add-course/new-course">Add New Course</Link>
    </div>
  );
}
