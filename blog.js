// blog.js - Dynamic Blog Loading

document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById("blog-posts");
    
    // Sample blog posts stored in JSON format
    const blogPosts = [
        {
            title: "Understanding Zero Trust Security",
            date: "March 31, 2025",
            content: "Zero Trust is a modern security model that requires strict identity verification for every user and device.",
            link: "#"
        },
        {
            title: "AI in Cybersecurity: The Future of Threat Detection",
            date: "March 28, 2025",
            content: "AI is transforming cybersecurity by enabling real-time anomaly detection and automated response.",
            link: "#"
        }
    ];
    
    // Function to render blog posts dynamically
    function renderBlogPosts() {
        blogContainer.innerHTML = ""; // Clear previous posts
        blogPosts.forEach(post => {
            const postElement = document.createElement("article");
            postElement.classList.add("blog-post");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p class="date">${post.date}</p>
                <p>${post.content}</p>
                <a href="${post.link}" class="read-more">Read More</a>
            `;
            blogContainer.appendChild(postElement);
        });
    }
    
    renderBlogPosts();
});
