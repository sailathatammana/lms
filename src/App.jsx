//NPM packages
import { useState, useCallback, useEffect } from "react";
import { getDocument } from "./scripts/firestore";

//Project files
import Browser from "./components/Browser";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import "./styles/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { dispatchUser } = useUser();
  console.log("where is the uid", uid);

  // Local state
  const [status, setStatus] = useState(1); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
        console.log(uid);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);

        dispatchUser({ type: "SET_USER", payload: user });
        setIsLogged(true);
        setStatus(1);
        console.log(status);
        console.log(uid);
      }
    },
    [setIsLogged, dispatchUser]
  );

  useEffect(() => {
    fetchUser("users", uid);
    console.log(uid);
  }, [fetchUser, uid]);

  return (
    <div className="App">
      {status === 0 && <p>loading</p>}
      {status === 1 && <Browser isLogged={isLogged} />}
      {status === 2 && <p>error</p>}
    </div>
  );
}
