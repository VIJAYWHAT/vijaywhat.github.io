import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqKaBbCVtFkMsQa6E2kn6_R4yvdYHfs3A",
    authDomain: "vj-portfolio1.firebaseapp.com",
    projectId: "vj-portfolio1",
    storageBucket: "vj-portfolio1.appspot.com",
    messagingSenderId: "594510195040",
    appId: "1:594510195040:web:4f8e5e376da842e17dd605",
    measurementId: "G-B3YS26NLQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
