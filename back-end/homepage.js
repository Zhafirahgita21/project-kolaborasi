// ================================
// MENU HAMBURGER
// ================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}


// ================================
// CLOSE MENU KETIKA LINK DIKLIK
// ================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// ================================
// TOMBOL PESAN SEKARANG
// ================================

function orderNow() {
    // Berpindah langsung ke halaman checkout.html
    window.location.href = "checkout.html";
}