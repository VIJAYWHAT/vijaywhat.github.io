// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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

// Initialize Firestore
const db = getFirestore(app);

// Store the data retrieved from Firestore
let usersData = [];

// Function to get data from Firestore
async function getData() {
    const snapshot = await getDocs(collection(db, "profile"));
    snapshot.forEach((doc) => {
        usersData.push(doc.data());
    });
}

// Call the function to get data
await getData();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loadingMessage = document.getElementById('loading-message');

    loadingMessage.style.display = 'block';
    errorMessage.textContent = '';

    const user = usersData.find(user => user.email === email && user.password === password);

    loadingMessage.style.display = 'none';

    if (user) {
        // Successful login
        window.location.href = 'dashboard';
        
    } else {
        // Show error message when user not found
        errorMessage.textContent = 'Invalid email or password';
    }
});
