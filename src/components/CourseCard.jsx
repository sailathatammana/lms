export default function CourseCard({ course }) {
  const { name, description } = course;
  return (
    <div>
      <li>
        <h3>{name}</h3>
        <p>{description}</p>
      </li>
    </div>
  );
}
