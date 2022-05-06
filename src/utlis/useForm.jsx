import { useState } from "react";

export default function useForm() {
  const [state, setState] = useState({});

  function handleChange(key, value) {
    const field = { [key]: value };
    setState({ ...state, ...field });
  }

  return [state, handleChange, setState];
}
