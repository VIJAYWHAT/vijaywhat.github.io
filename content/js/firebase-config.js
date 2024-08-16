// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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

export async function getBlogData() {
  const docRef = doc(db, "blog-data", "sahag_speech");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      console.log("Data from Firestore:", docSnap.data()); // Debugging line
      return docSnap.data(); // Return the entire document data
  } else {
      console.error("No such document!");
      return { title: "Title not found", content: "Content not found!" };
  }
}
