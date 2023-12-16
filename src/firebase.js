import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDI_skO5eO4-N4uYMaOQlA9w-X8gtzv3oM",
  authDomain: "quizzes-app-49e95.firebaseapp.com",
  projectId: "quizzes-app-49e95",
  storageBucket: "quizzes-app-49e95.appspot.com",
  messagingSenderId: "198462061806",
  appId: "1:198462061806:web:83d2373610651b577487ff",
  measurementId: "G-YYGQL1LNTN",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
