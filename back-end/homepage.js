const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}


const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});


function orderNow() {
    window.location.href = "checkout.html";
}