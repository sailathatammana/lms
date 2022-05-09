// NPM package
import { createContext, useContext, useReducer } from "react";

//Project files
import courseReducer from "./courseReducer";

// Properties
const UserContext = createContext(null);

export function CourseProvider({ children }) {
  // Local state
  const [course, dispatchCourse] = useReducer(courseReducer, {});

  return (
    <UserContext.Provider value={{ course, dispatchCourse }}>
      {children}
    </UserContext.Provider>
  );
}

export function useCourse() {
  return useContext(UserContext);
}
