// NPM package
import { createContext, useContext, useReducer, useState } from "react";

// Project files
import authReducer from "./authReducer";

// Properties
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Local state
  const [isLogged, setIsLogged] = useState(false);
  const [uid, dispatchUid] = useReducer(authReducer, "");

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
