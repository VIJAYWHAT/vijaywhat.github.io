import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import app from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

function handleSignOut(redirectUrl) {
    signOut(auth).then(() => {
        localStorage.removeItem('lastLoginDate');
        window.location.href = redirectUrl;
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}

function checkDailyLogin() {
    const lastLoginDate = localStorage.getItem('lastLoginDate');
    const today = new Date().toISOString().split('T')[0];

    if (lastLoginDate !== today) {
        handleSignOut("login.html");
    }
}

checkDailyLogin();

onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User is logged in");
        displayBlogTitles();
    } else {
        console.log("User is not logged in, redirecting to login page");
        window.location.href = "login.html";
    }
});

async function displayBlogTitles() {
    const blogCollection = collection(db, "blog-data");
    const blogSnapshot = await getDocs(blogCollection);
    const blogListElement = document.getElementById("blog-list");

    blogListElement.innerHTML = '';

    blogSnapshot.forEach(doc => {
        const data = doc.data();
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `detail.html?docId=${doc.id}`;
        link.textContent = data.title;
        listItem.appendChild(link);
        blogListElement.appendChild(listItem);
    });
}

document.querySelector('.profile-container').addEventListener('click', (event) => {
    event.preventDefault();
    handleSignOut("https://vijaywhat.github.io/");
});


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