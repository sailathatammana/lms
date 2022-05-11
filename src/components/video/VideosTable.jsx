import { ImBin } from "react-icons/im";

export default function VideosTable({ data, setVideosList }) {
  const { name, link } = data;

  function onDelete(event) {
    event.preventDefault();
    setVideosList((curr) => curr.filter((video) => video !== data));
  }

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{link}</td>
        <td>
          <button className="delete-btn" onClick={(event) => onDelete(event)}>
            <ImBin />
          </button>
        </td>
      </tr>
    </tbody>
  );
}
