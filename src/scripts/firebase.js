import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfiguration = {
  apiKey: "AIzaSyAGOAww0-1csE_VTt8rSx65Pd9Kx_Igdk0",
  authDomain: "learning-management-syst-2a323.firebaseapp.com",
  projectId: "learning-management-syst-2a323",
  storageBucket: "learning-management-syst-2a323.appspot.com",
  messagingSenderId: "699386245884",
  appId: "1:699386245884:web:12c0c1839fa06752041d79",
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export const fireStoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
