// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
authDomain: "blog-app-k.firebaseapp.com",
projectId: "blog-app-k",
storageBucket: "blog-app-k.firebasestorage.app",
messagingSenderId: "766996877622",
appId: "1:766996877622:web:51e9aa1e829779cfd5e397"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
