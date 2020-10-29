import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBRmE-usy5eQ88_yw2SAiE8l6ryttUpnp8",
  authDomain: "crwn-clothing-2d299.firebaseapp.com",
  databaseURL: "https://crwn-clothing-2d299.firebaseio.com",
  projectId: "crwn-clothing-2d299",
  storageBucket: "crwn-clothing-2d299.appspot.com",
  messagingSenderId: "821421192242",
  appId: "1:821421192242:web:6ad4299906a6cd5ea6f82b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
