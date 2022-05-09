//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Landing from "../pages/Landing";

export default function UnLogged() {
  return (
    <>
      <Route component={Landing} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
    </>
  );
}
