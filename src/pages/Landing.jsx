//Npm package
import { Link } from "react-router-dom";

//Project files
import hero from "../assets/Hero.jpg";

export default function Landing() {
  return (
    <div>
      <h4>Learning platform For students and teachers. </h4>
      <p>
        "There is no end to education. It is not that you read a book, pass an
        examination, and finish with education. The whole of life, from the
        moment you are born to the moment you die, is a process of learning."
        <br />
        -Jiddu Krishnamurti
      </p>
      <Link to="/sign-up">Sign Up</Link>
      <img src={hero} alt="" />
    </div>
  );
}
