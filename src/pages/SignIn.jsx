//NPM packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import signin from "../data/signin.json";
import InputField from "../components/InputField";
import useForm from "../utlis/useForm";
import { useUser } from "../state/UserProvider";
import { useAuth } from "../state/AuthProvider";
import { signIn } from "../scripts/Authentication";
import { getDocument } from "../scripts/firestore";

export default function SignIn() {
  const [values, handleChange, setValues] = useForm();
  const { dispatchUser } = useUser();
  const { setIsLogged } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  //Methods
  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await signIn(values.email, values.password);

    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const document = await getDocument("users", uid);

    dispatchUser({ type: "SET_USER", payload: document });
    setIsLogged(true);
    navigate.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }

  const inputFields = signin.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        {inputFields}
        <button>Sign in</button>
      </form>
    </div>
  );
}
