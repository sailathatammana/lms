export default function VideosTable({ data, setVideosList }) {
  const { name, link } = data;

  function onDelete(event) {
    event.preventDefault();
    setVideosList((curr) => curr.filter((video) => video !== data));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{link}</td>
          <td>
            <button onClick={(event) => onDelete(event)}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
