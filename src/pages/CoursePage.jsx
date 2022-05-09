//Npm package
import { useParams } from "react-router-dom";

//Project files
import { useCourse } from "../state/CoursesProvider";
import FileItem from "../components/FileItem";
import VideoItem from "../components/VideoItem";

export default function CoursePage() {
  const { courses } = useCourse();
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);
  const { imgUrl, name, description } = course;
  const filesList = course.files.map((files) => <FileItem data={files} />);
  const videosList = course.videos.map((video) => <VideoItem data={video} />);

  return (
    <div>
      <img src={imgUrl} alt="" />
      {name}
      {description}
      <h2>Files</h2>
      {filesList}
      <h2>Videos</h2>
      {videosList}
    </div>
  );
}
