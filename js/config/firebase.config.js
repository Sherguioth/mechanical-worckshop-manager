// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBH5kQFSZpxMjR4Cr8F_3rhyfqQVM1hd10",
    authDomain: "mechanical-workshop-manager.firebaseapp.com",
    projectId: "mechanical-workshop-manager",
    storageBucket: "mechanical-workshop-manager.appspot.com",
    messagingSenderId: "36815770351",
    appId: "1:36815770351:web:793df01c51e2f5ae6f411a",
    measurementId: "G-YNH4KJK0V5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
