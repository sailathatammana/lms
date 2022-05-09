//NPM packages
import { useState, useCallback, useEffect } from "react";

//Project files
import Browser from "./components/Browser";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import { getDocument } from "./scripts/firestore";
import { getCollection } from "./scripts/firestore";
import { useCourse } from "./state/CourseProvider";
import "./styles/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { dispatchUser } = useUser();
  const { dispatchCourse } = useCourse();

  // Local state
  const [status, setStatus] = useState(1); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);

        dispatchUser({ type: "SET_USER", payload: user });
        setIsLogged(true);
        setStatus(1);
      }
    },
    [setIsLogged, dispatchUser]
  );

  const fetchCourses = useCallback(
    async (path) => {
      try {
        const courses = await getCollection(path);

        dispatchCourse({ type: "SET_COURSES", payload: courses });
      } catch {
        setStatus(2);
      }
    },
    [dispatchCourse]
  );

  useEffect(() => {
    fetchUser("users", uid);
    fetchCourses("courses");
  }, [fetchUser, uid, fetchCourses]);

  return (
    <div className="App">
      {status === 0 && <p>loading</p>}
      {status === 1 && <Browser isLogged={isLogged} />}
      {status === 2 && <p>error</p>}
    </div>
  );
}
