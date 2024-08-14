import { getBlogContent } from "./firebase-config.js";


document.addEventListener("DOMContentLoaded", async () => {
    const contentElement = document.getElementById("blog-content");
    
    if (contentElement) {
        const content = await getBlogContent();
        contentElement.innerHTML = content;

    }
});
