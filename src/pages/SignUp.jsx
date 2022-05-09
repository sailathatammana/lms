//Npm package
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Project files
import InputField from "../components/InputField";
import signup from "../data/signup.json";
import useForm from "../utlis/useForm";
import { createAccount } from "../scripts/Authentication";
import { createDocumentWithId } from "../scripts/firestore";
import { useAuth } from "../state/AuthProvider";
import { useUser } from "../state/UserProvider";

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, handleChange, setValues] = useForm();
  const { setIsLogged } = useAuth();
  const { dispatchUser } = useUser();
  const history = useHistory();

  //Methods
  async function handleSubmit(event) {
    event.preventDefault();
    const account = await createAccount(values.email, values.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = { name: values.name, city: values.city };

    await createDocumentWithId("users", uid, newUser);
    dispatchUser({ type: "SET_USER", payload: newUser });
    setIsLogged(true);
    setValues({});
    history.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }
  const inputFields = signup.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        {inputFields}
        {errorMessage}
        <button>Sign Up</button>
      </form>
    </div>
  );
}
