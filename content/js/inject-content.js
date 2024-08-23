import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import app from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

function checkDailyLogin() {
    const lastLoginDate = localStorage.getItem('lastLoginDate');
    const today = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD

    // If the last login date is not today, log out the user
    if (lastLoginDate !== today) {
        signOut(auth).then(() => {
            localStorage.removeItem('lastLoginDate');
            window.location.href = "login.html";
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    }
}

checkDailyLogin();

// Check if the user is authenticated
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User is logged in");

        // Load blog content if authenticated
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

document.querySelector('.profile-container').addEventListener('click', (event) => {
    event.preventDefault();

    signOut(auth).then(() => {
        localStorage.removeItem('lastLoginDate');
        window.location.href = "login.html";
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
});
