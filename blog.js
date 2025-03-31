// blog.js - Dynamic Blog Loading

document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById("blog-posts");
    
    // Blog posts from Dev.to
    const blogPosts = [
        {
            title: "Deploying a Static Website Using S3 and CloudFront",
            date: "February 23, 2025",
            content: "Learn how to host a static website on AWS using S3 and CloudFront for better performance and security.",
            link: "https://dev.to/leonardkachi/deploying-a-static-website-using-s3-and-cloudfront-5h39"
        },
        {
            title: "AWS S3 Advanced Features",
            date: "February 20, 2025",
            content: "Explore advanced AWS S3 features like lifecycle policies, versioning, and access controls.",
            link: "https://dev.to/leonardkachi/aws-s3-advanced-features-3m42"
        },
        {
            title: "Kubernetes Hardening Guide: Reducing Misconfigurations",
            date: "February 10, 2025",
            content: "A guide to securing Kubernetes environments by minimizing security risks and misconfigurations.",
            link: "https://dev.to/leonardkachi/kubernetes-hardening-guide-reducing-misconfigurations-iea"
        },
        {
            title: "Automated AWS Security Monitoring: A Python-Based AWS Security Tool",
            date: "February 10, 2025",
            content: "Build an automated security monitoring tool using Python and AWS security services.",
            link: "https://dev.to/leonardkachi/automated-aws-security-monitoring-a-python-based-aws-security-tool-43nm"
        },
        {
            title: "How to Deploy a Website on GitHub Pages and AWS EC2: A Step-by-Step Guide",
            date: "February 7, 2025",
            content: "A detailed guide on deploying websites using GitHub Pages and AWS EC2.",
            link: "https://dev.to/leonardkachi/how-to-deploy-a-website-on-github-pages-and-aws-ec2-a-step-by-step-guide-3j6k"
        },
        {
            title: "Cloud Security Best Practices: A Blueprint for Securing Your Cloud Environment",
            date: "February 7, 2025",
            content: "Key strategies and best practices for securing cloud-based applications and infrastructure.",
            link: "https://dev.to/leonardkachi/cloud-security-best-practice-a-blueprint-for-securing-your-cloud-enviroment-18m8"
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
