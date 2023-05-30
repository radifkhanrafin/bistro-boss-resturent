// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrMhuCCzfWnlKmX2DHSpSkfjdIw_a088M",
  authDomain: "bistro-boss-resturent.firebaseapp.com",
  projectId: "bistro-boss-resturent",
  storageBucket: "bistro-boss-resturent.appspot.com",
  messagingSenderId: "574742301770",
  appId: "1:574742301770:web:5252e59e37630068236ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app