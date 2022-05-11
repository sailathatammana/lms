import React, { useRef, useState } from "react";
import { resetPassword } from "../scripts/Authentication";

export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function onReset(event) {
    event.preventDefault();
    try {
      setMessage("");
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
  }

  return (
    <form className="reset-password">
      <p>Reset your password by typing your Email. </p>
      <label>
        <span>Email</span>
        <input
          type="email"
          ref={emailRef}
          placeholder="test@gmail.com"
          required
        />
      </label>
      {error}
      {message}
      <button className="button-main" onClick={onReset}>
        Reset Password
      </button>
    </form>
  );
}
