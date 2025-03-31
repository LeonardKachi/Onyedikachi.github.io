// Updated script.js - Fixes scrolling issues & enhances navigation

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script Loaded Successfully!");
    
    // Fix scrolling issue
    document.body.style.overflow = "auto";
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active navigation link
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY + 80;
        navLinks.forEach(link => {
            let section = document.getElementById(link.getAttribute("href").substring(1));
            if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });

    // Fix navigation access issue
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            if (!this.href.includes("#")) {
                window.location.href = this.href;
            }
        });
    });
});
