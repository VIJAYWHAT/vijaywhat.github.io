import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import app from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User is logged in");

        const urlParams = new URLSearchParams(window.location.search);
        const docId = urlParams.get('docId');

        if (docId) {
            const docRef = doc(db, "blog-data", docId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                document.getElementById('blog-title').textContent = docSnap.data().title;
                document.getElementById('blog-content').innerHTML = docSnap.data().content;
                
            } else {
                document.getElementById('blog-title').textContent = "Title not found";
                document.getElementById('blog-content').textContent = "Content not found!";
            }
        }
    } else {
        console.log("User is not logged in, redirecting to login page");
        window.location.href = "login.html";
    }
});