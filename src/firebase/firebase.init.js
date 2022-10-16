// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSuf3dxPUuQoqrTLQwcgTvOdJFmCxjZ5w",
  authDomain: "first-firebase-authentic-2f013.firebaseapp.com",
  projectId: "first-firebase-authentic-2f013",
  storageBucket: "first-firebase-authentic-2f013.appspot.com",
  messagingSenderId: "365479228634",
  appId: "1:365479228634:web:47b75ed769ab86dd37e1e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//   <-----------------Extra added------------------>
export default app;
