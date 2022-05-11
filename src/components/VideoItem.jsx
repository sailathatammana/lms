import { RiVideoFill } from "react-icons/ri";

export default function VideoItem({ data }) {
  const { name, link } = data;
  return (
    <li className="file-item">
      <RiVideoFill />
      <a target="_blank" rel="noreferrer" href={link}>
        {name}
      </a>
    </li>
  );
}
