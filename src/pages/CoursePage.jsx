//Npm package
import { useParams } from "react-router-dom";

//Project files
import { useCourse } from "../state/CoursesProvider";
import FileItem from "../components/File/FileItem";
import VideoItem from "../components/video/VideoItem";

export default function CoursePage() {
  const { courses } = useCourse();
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);
  const { imgUrl } = course;
  const filesList = course.files.map((files) => <FileItem data={files} />);
  const videosList = course.videos.map((video) => <VideoItem data={video} />);

  return (
    <div className="course-page">
      <img className="hero" src={imgUrl} alt="" />
      <h2>Files</h2>
      <ul>{filesList}</ul>
      <h2>Videos</h2>
      <ul>{videosList}</ul>
    </div>
  );
}
