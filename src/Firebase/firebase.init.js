// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDXMLicBlnhhDBmpMsoYdtBeKNB_RMO3M",
  authDomain: "crowd-funding-b10a10.firebaseapp.com",
  projectId: "crowd-funding-b10a10",
  storageBucket: "crowd-funding-b10a10.firebasestorage.app",
  messagingSenderId: "1013712340549",
  appId: "1:1013712340549:web:3d5c0f2da2a508854d452c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export const auth = getAuth(app)
// export default  app;
export default app;