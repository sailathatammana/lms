import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <SignUp />
      <SignIn />
      <Teacher />
      <Student />
    </div>
  );
}
