//Npm package
import { Link } from "react-router-dom";

//Project files
import hero from "../assets/Hero.jpg";

export default function Landing() {
  return (
    <div className="landing-page">
      <section>
        <p>
          " The whole of life, from the moment you are born to the moment you
          die, is a process of learning."
        </p>
        <Link className="button-main" to="/sign-up">
          Sign Up
        </Link>
      </section>
      <img src={hero} alt="" />
    </div>
  );
}
