import { useHistory } from "react-router";
import addCoursefeilds from "../data/addCourse-fields.json";
import InputField from "./InputField";
import useForm from "../utlis/useForm";
import { useCourse } from "../state/CourseProvider";
import { createDocument } from "../scripts/firestore";

export default function FormAddCourse() {
  const [values, handleChange, setValues] = useForm();
  const { dispatchCourse } = useCourse();
  const location = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const newCourse = {
      ...values,
    };
    console.log(values);
    createDocument("courses", newCourse);
    setValues({});
    dispatchCourse({ type: "ADD_COURSE", payload: newCourse });
    alert("Course Added");
    location.goBack();
  }

  const inputFields = addCoursefeilds.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <div>
      <p>
        Create new cource by adding videos, slides, pdf and assignments for your
        students.
      </p>
      <form onSubmit={handleSubmit}>
        {inputFields}
        <button>Create Course</button>
      </form>
    </div>
  );
}
