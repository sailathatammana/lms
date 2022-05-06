import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import { getDocument } from "./scripts/firestore";
import "./styles/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { dispatchUser } = useUser();

  // Local state
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error

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

  useEffect(() => {
    fetchUser("users", uid);
  }, [fetchUser, uid]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
