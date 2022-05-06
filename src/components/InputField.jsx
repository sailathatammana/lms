import { useRef } from "react";
export default function InputField({ options, handleChange }) {
  const { label, placeholder, key, type } = options;
  const inputReference = useRef(null);
  return (
    <fieldset>
      <label>
        <span>{label}</span>
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
