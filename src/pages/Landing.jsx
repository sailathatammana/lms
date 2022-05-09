import { useUser } from "../state/UserProvider";
import LoginNavBar from "../components/LoginNavBar";
import hero from "../assets/Hero.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  const { user } = useUser();
  console.log("landing page", user);
  return (
    <div>
      <LoginNavBar />
      <section>
        <h4>Learning platform For students and teachers. </h4>
        <p>
          "There is no end to education. It is not that you read a book, pass an
          examination, and finish with education. The whole of life, from the
          moment you are born to the moment you die, is a process of learning."
          <br />
          -Jiddu Krishnamurti
        </p>
        <Link to="/sign-up">
          <button>Sign Up</button>
        </Link>
      </section>
      <img src={hero} alt="" />
    </div>
  );
}
