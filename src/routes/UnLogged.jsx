//NPM packages
import { Route } from "react-router-dom";

//Project files
import Landing from "../pages/Landing";
import LoginNavBar from "../components/LoginNavBar";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

export default function UnLogged() {
  return (
    <>
      <LoginNavBar />
      <Route component={Landing} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
      <Route component={ForgotPassword} path="/forgot-password" />
    </>
  );
}
