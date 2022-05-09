//Npm package
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

//Project files
import useForm from "../utlis/useForm";
import { useCourse } from "../state/CoursesProvider";
import { createDocument, updateDocument } from "../scripts/firestore";
import InputImage from "./InputImage";
import MultipleUploadField from "./MultipleUploadField";
import VideoField from "./VideoField";

export default function FormAddCourse() {
  const { id } = useParams();
  //Global state
  const { courses, dispatchCourses } = useCourse();

  //local state
  const [course] = useState(findCourse(courses, id));
  const [values, handleChange, setValues] = useForm(course);
  const [files, setFiles] = useState(course.files || []);
  const [videoLink, setVideoLink] = useState("");
  const [videosList, setVideosList] = useState(course.videos || []);
  const [videoName, setVideoName] = useState("");
  const location = useHistory();

  //Methods
  function findCourse(courses, id) {
    const existingCourse = courses.find((course) => course.id === id);

    return existingCourse === undefined ? {} : existingCourse;
  }

  function onChange(key, value) {
    const imgField = { [key]: value };
    setValues({ ...values, ...imgField });
  }

  function onSave(event) {
    id === "new-course" ? onCreate(event) : onUpdate(event);
    location.goBack();
  }

  async function onCreate(event) {
    event.preventDefault();
    const newCourse = {
      ...values,
      files: files,
      videos: videosList,
    };
    const id = await createDocument("courses", newCourse);
    newCourse.id = id;
    dispatchCourses({ type: "ADD_COURSE", payload: newCourse });
    alert("Course Added");
    setValues({});
    setFiles([]);
  }

  async function onUpdate(event) {
    event.preventDefault();
    const updatedCourse = {
      ...values,
      imgUrl: course.imgUrl,
      files: files,
      videos: videosList,
    };
    await updateDocument("courses", updatedCourse, course.id);
    updatedCourse.id = course.id;
    dispatchCourses({ type: "UPDATE_COURSE", payload: updatedCourse });
    alert("Course updated");
  }
  return (
    <div>
      <p>
        Create new course by adding videos, slides, pdf and assignments for your
        students.
      </p>
      <form>
        <InputImage
          imgUrl={values.imgUrl || course.imgUrl}
          onChange={onChange}
        />
        <label>
          Course Name
          <input
            placeholder="React"
            type="text"
            value={values.name || course.name}
            onChange={(event) => handleChange("name", event.target.value)}
          />
        </label>
        <label>
          Description
          <input
            placeholder="The Most Populer JavaScript Library "
            type="text"
            value={values.description || course.description}
            onChange={(event) =>
              handleChange("description", event.target.value)
            }
          />
        </label>
        <MultipleUploadField setFiles={setFiles} files={files} />
        <VideoField
          state={[
            videoLink,
            setVideoLink,
            videoName,
            setVideoName,
            videosList,
            setVideosList,
          ]}
        />
        <button onClick={(event) => onSave(event)}>Submit</button>
      </form>
    </div>
  );
}
