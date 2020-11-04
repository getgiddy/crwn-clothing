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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
