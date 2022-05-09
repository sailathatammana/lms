//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import FormAddCourse from "../components/FormAddCourse";
import CoursePage from "../pages/CoursePage";

import NavBar from "../components/NavBar";

export default function Logged() {
  return (
    <>
      <Route component={NavBar} />
      <Route component={Dashboard} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
      <Route component={FormAddCourse} path="/add-course/:id" />
      <Route component={CoursePage} path="/course-page/:id" />
    </>
  );
}
