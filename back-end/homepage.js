// // ================================
// // MENU HAMBURGER
// // ================================
// const menuToggle = document.getElementById("menuToggle");
// const navMenu = document.getElementById("navMenu");

// if (menuToggle && navMenu) {
//     menuToggle.addEventListener("click", function () {
//         navMenu.classList.toggle("active");
//     });
// }

// // ================================
// // CLOSE MENU KETIKA LINK DIKLIK
// // ================================
// const navLinks = document.querySelectorAll("#navMenu a");

// navLinks.forEach(function (link) {
//     link.addEventListener("click", function () {
//         navMenu.classList.remove("active");
//     });
// });

// // ================================
// // TOMBOL PESAN SEKARANG (NAVBAR)
// // ================================
// function orderNow() {
//     window.location.href = "checkout.html";
// }

// // ================================
// // LOGIKA CHECKOUT PAGE
// // ================================
// document.addEventListener('DOMContentLoaded', () => {
//     let selectedPaymentMethod = 'Transfer bank';

//     const paymentOptions = document.querySelectorAll('.payment-option');
//     const btnBuatPesanan = document.getElementById('btnBuatPesanan');

//     if (paymentOptions.length > 0) {
//         paymentOptions.forEach(option => {
//             option.addEventListener('click', () => {
//                 paymentOptions.forEach(opt => opt.classList.remove('selected'));
//                 option.classList.add('selected');
//                 selectedPaymentMethod = option.getAttribute('data-payment');
//             });
//         });
//     }

//     // Pengecekan agar tidak error jika elemen tidak ada di halaman saat ini
//     if (btnBuatPesanan) {
//         btnBuatPesanan.addEventListener('click', () => {
//             const nama = document.getElementById('namaLengkap').value.trim();
//             const wa = document.getElementById('noWhatsApp').value.trim();
//             const alamat = document.getElementById('alamatLengkap').value.trim();

//             if (!nama || !wa || !alamat) {
//                 alert('Harap isi semua kolom informasi pengiriman!');
//                 return;
//             }

//             alert(`Pesanan Berhasil Dibuat!\n\nNama: ${nama}\nNo WA: ${wa}\nAlamat: ${alamat}\nMetode Pembayaran: ${selectedPaymentMethod}\nTotal: Rp 36.000`);
//         });
//     }
// });




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
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});

// ================================
// TOMBOL PESAN SEKARANG (NAVBAR)
// ================================
function orderNow() {
    window.location.href = "checkout.html";
}