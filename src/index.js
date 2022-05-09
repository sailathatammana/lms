import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthProvider } from "./state/AuthProvider";
import { UserProvider } from "./state/UserProvider";
import { CourseProvider } from "./state/CourseProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <CourseProvider>
          <App />
        </CourseProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
