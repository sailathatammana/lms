export default function FileItem({ data }) {
  const { name, link } = data;
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
}
