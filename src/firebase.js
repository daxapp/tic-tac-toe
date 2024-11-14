import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAsEP6zRj5nWoA_JWAoYz986slXM66DywQ",
  authDomain: "tick-tack-toe-d93bb.firebaseapp.com",
  databaseURL: "https://tick-tack-toe-d93bb-default-rtdb.firebaseio.com",
  projectId: "tick-tack-toe-d93bb",
  storageBucket: "tick-tack-toe-d93bb.appspot.com",
  messagingSenderId: "1056548523686",
  appId: "1:1056548523686:web:9cf83aa920545cbe3c2e67",
  measurementId: "G-FP8EVEF139"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
