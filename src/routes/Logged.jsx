//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import NavBar from "../components/NavBar";

export default function Logged() {
  return (
    <>
      <Route component={NavBar} />
      <Route component={Dashboard} path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
    </>
  );
}
