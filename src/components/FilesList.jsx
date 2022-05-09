export default function FilesList({ onDelete, file }) {
  return (
    <li>
      {file.name}
      <button onClick={(event) => onDelete(event, file.name)}>delete</button>
    </li>
  );
}
