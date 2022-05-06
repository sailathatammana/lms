// NPM packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Project files
import { authInstance } from "./firebase";

export async function createAccount(email, password) {
  const account = { isCreated: false, payload: "" };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = userCredential.user.uid;
  } catch (error) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}

export async function signIn(email, password) {
  const account = { isLogged: false, payload: "" };

  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isLogged = true;
    account.payload = userCredential.user.uid;
  } catch (error) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}

export async function logout() {
  const account = { isLoggout: false, payload: "" };

  try {
    await signOut(authInstance);
    account.isLoggout = true;
    account.payload = "Logout successfully";
  } catch (error) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}
