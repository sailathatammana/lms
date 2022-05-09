//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Student from "../pages/Student";
import Teacher from "../pages/Teacher";
import NavBar from "../components/NavBar";

export default function Logged() {
  return (
    <>
      <Route component={NavBar} />
      <Route component={Teacher} exact path="/" />
      <Route component={Student} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
    </>
  );
}
