// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    if (menuToggle && navbarCollapse) {
        const navLinks = navbarCollapse.querySelectorAll(".nav-link");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (navbarCollapse.classList.contains("show")) {
                    menuToggle.click();
                }
            });
        });
    }
});
