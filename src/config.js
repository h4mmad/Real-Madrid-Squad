import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAl0qrA7hkcNWLHHb8vBesV8CTAsE5yM_U",
  authDomain: "real-madrid-58320.firebaseapp.com",
  projectId: "real-madrid-58320",
  storageBucket: "real-madrid-58320.appspot.com",
  messagingSenderId: "1025333461105",
  appId: "1:1025333461105:web:e9523e92161a44fc3a1bd0",
  measurementId: "G-121JZVJ3YV"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;





