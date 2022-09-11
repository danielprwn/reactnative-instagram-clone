//import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
require("firebase/auth");
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmLso7bcDF3crtL_eDPn45YnS_SeIu2Y",
  authDomain: "instagram-clone-rn-471de.firebaseapp.com",
  projectId: "instagram-clone-rn-471de",
  storageBucket: "instagram-clone-rn-471de.appspot.com",
  messagingSenderId: "594184495955",
  appId: "1:594184495955:web:cfc4f80106eed1caf777a6",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

//export default firebase;

export { firebase, db };
