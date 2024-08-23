// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
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

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loadingMessage = document.getElementById('loading-message');

    loadingMessage.style.display = 'block';
    errorMessage.textContent = '';

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = 'dashboard';
      })
      .catch((error) => {
        console.log(error);
        errorMessage.textContent = 'Invalid email or password';
      })
      .finally(() => {
        loadingMessage.style.display = 'none';
      });
});
