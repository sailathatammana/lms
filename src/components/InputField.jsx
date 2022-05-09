import { useRef } from "react";
export default function InputField({ options, handleChange }) {
  const { label, instructions, placeholder, key, type } = options;
  const inputReference = useRef(null);
  return (
    <fieldset>
      <label>
        {instructions && <small>{instructions}</small>}
        <b>{label}</b>
        <input
          type={type}
          ref={inputReference}
          placeholder={placeholder}
          onChange={() => handleChange(key, inputReference.current.value)}
        />
      </label>
    </fieldset>
  );
}
