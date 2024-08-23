import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import app from './firebase-config.js';

const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loadingMessage = document.getElementById('loading-message');

    loadingMessage.style.display = 'block';
    errorMessage.textContent = '';

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('lastLoginDate', today);
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        console.log(error);
        errorMessage.textContent = 'Invalid email or password';
      })
      .finally(() => {
        loadingMessage.style.display = 'none';
      });
});
