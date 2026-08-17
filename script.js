// =========================
// MOBILE MENU
// =========================
const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});
// =========================
// CLOSE MENU AFTER CLICK
// =========================
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});
// =========================
// CURRENT YEAR
// =========================
const footerText = document.querySelector(".footer p");
const currentYear = new Date().getFullYear();
footerText.innerHTML =© ${currentYear} Omar Ahmed. All Rights Reserved.;