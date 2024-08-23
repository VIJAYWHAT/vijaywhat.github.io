import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import app from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

// Function to fetch blog data from Firestore
async function getBlogData() {
    const docRef = doc(db, "blog-data", "sahag_speech");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Data from Firestore:", docSnap.data());
        return docSnap.data();
    } else {
        console.error("No such document!");
        return { title: "Title not found", content: "Content not found!" };
    }
}

// Function to handle user authentication check
function checkUserAuthentication() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log("User is logged in");

            const titleElement = document.getElementById("blog-title");
            const contentElement = document.getElementById("blog-content");

            if (titleElement && contentElement) {
                const blogData = await getBlogData();
                titleElement.innerHTML = blogData.title;
                contentElement.innerHTML = blogData.content;
            }
        } else {
            console.log("User is not logged in, redirecting to login page");
            window.location.href = "login.html";
        }
    });
}

checkUserAuthentication();

setInterval(() => {
    checkUserAuthentication();
}, 900000); 

setInterval(() => {
    signOut(auth).then(() => {
        console.log("User has been logged out due to inactivity");
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}, 900000); // 