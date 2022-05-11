//Npm package
import { Link } from "react-router-dom";
import { useUser } from "../state/UserProvider";

//Project files
import CourseCard from "../components/CourseCard";
import { useCourse } from "../state/CoursesProvider";
import { deleteDocument } from "../scripts/firestore";
import { ImPlus } from "react-icons/im";

export default function Dashboard() {
  const { courses, dispatchCourses } = useCourse();
  const { user } = useUser();

  async function onDelete(id) {
    prompt("Are you sure want to delete?");
    await deleteDocument("courses", id);
    const updated = courses.filter((course) => course.id !== id);
    alert("deleted");
    dispatchCourses({ type: "SET_COURSES", payload: updated });
  }

  const course = courses.map((course) => (
    <CourseCard key={course.id} onDelete={onDelete} course={course} />
  ));
  return (
    <div className="courses-page">
      <h2>Courses</h2>
      <ul>{course}</ul>
      {user.role === "teacher" && (
        <section className="round-btn">
          <Link to="/add-course/new-course">
            <ImPlus />
          </Link>
        </section>
      )}
    </div>
  );
}
