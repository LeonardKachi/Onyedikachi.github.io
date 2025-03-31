// script.js - JavaScript for animations and interactions

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    function highlightNav() {
        let scrollPosition = window.scrollY;
        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop - 100) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", () => {
        revealSections();
        highlightNav();
    });

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    revealSections(); // Run on page load
});
