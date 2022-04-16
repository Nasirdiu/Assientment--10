import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdZjPiVBSB7XDMwxEeH0dupNFCWjoZGYE",
  authDomain: "assignment-project-a39e6.firebaseapp.com",
  projectId: "assignment-project-a39e6",
  storageBucket: "assignment-project-a39e6.appspot.com",
  messagingSenderId: "51091000081",
  appId: "1:51091000081:web:7d5ebecadba43f2542dab0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
