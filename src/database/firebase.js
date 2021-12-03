import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZMZhg2IyuoKfQql6pePZiZ5ETPj194HE",
  authDomain: "internship-27592.firebaseapp.com",
  projectId: "internship-27592",
  storageBucket: "internship-27592.appspot.com",
  messagingSenderId: "392187501611",
  appId: "1:392187501611:web:d6b01f9e3f3cbd52871e6e"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);
export default db