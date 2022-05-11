import { BsFileEarmarkText } from "react-icons/bs";

export default function FileItem({ data }) {
  const { name, link } = data;
  return (
    <li className="file-item">
      <BsFileEarmarkText />
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </li>
  );
}
