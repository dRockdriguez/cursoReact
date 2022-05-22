import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAij7QYs3YsPtL16gcYYli7q06Hl7VNf5g",
  authDomain: "journal-app-curso-f9ba3.firebaseapp.com",
  projectId: "journal-app-curso-f9ba3",
  storageBucket: "journal-app-curso-f9ba3.appspot.com",
  messagingSenderId: "31491360259",
  appId: "1:31491360259:web:89643a62f723d2e47bf036",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
