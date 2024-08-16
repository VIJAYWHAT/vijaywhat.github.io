import { getBlogData } from "./firebase-config.js";

document.addEventListener("DOMContentLoaded", async () => {
    const titleElement = document.getElementById("blog-title");
    const contentElement = document.getElementById("blog-content");
    
    if (titleElement && contentElement) {
        const blogData = await getBlogData();
        titleElement.innerHTML = blogData.title; // Set the blog title
        contentElement.innerHTML = blogData.content; // Set the blog content
    }
});
