//NPM packages
import { useState, useCallback, useEffect } from "react";

//Project files
import Browser from "./components/Browser";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import { getDocument } from "./scripts/firestore";
import { getCollection } from "./scripts/firestore";
import { useCourse } from "./state/CoursesProvider";
import "./styles/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { dispatchUser } = useUser();
  const { dispatchCourses } = useCourse();
  // Local state
  const [status, setStatus] = useState(1); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchCourses = useCallback(
    async (path) => {
      try {
        const courses = await getCollection(path);
        dispatchCourses({ type: "SET_COURSES", payload: courses });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [dispatchCourses]
  );

  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);
        dispatchUser({ type: "SET_USER", payload: user });
        setIsLogged(true);
      }
    },
    [dispatchUser, setIsLogged]
  );

  useEffect(() => {
    fetchCourses("courses");
    fetchUser("users", uid);
  }, [fetchUser, uid, fetchCourses]);

  return (
    <div className="App">
      {status === 0 && <p>loading</p>}
      {status === 1 && <Browser isLogged={isLogged} />}
      {status === 2 && <p>error</p>}
    </div>
  );
}
