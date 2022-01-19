import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL08gvoXpJxY49Rd1OCKO8WXipwithZJ8",
  authDomain: "crown-db-9d43a.firebaseapp.com",
  projectId: "crown-db-9d43a",
  storageBucket: "crown-db-9d43a.appspot.com",
  messagingSenderId: "632079272820",
  appId: "1:632079272820:web:afb01f53ac75231e47fa21",
  measurementId: "G-M0K4Z7147L",
};
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt: createdAt.toISOString().split("T")[0],
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
