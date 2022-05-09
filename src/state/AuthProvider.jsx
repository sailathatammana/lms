// NPM package
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authInstance } from "../scripts/firebase";

// Project files
import authReducer from "./authReducer";

// Properties
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Local state
  const [isLogged, setIsLogged] = useState(false);
  const [uid, dispatchUid] = useReducer(authReducer, "");

  // Methods
  useEffect(() => {
    onAuthStateChanged(authInstance, (user) => {
      if (user) dispatchUid({ type: "SET_UID", payload: user.uid });
      else dispatchUid({ type: "SET_UID", payload: "no user" });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ uid, dispatchUid, isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
