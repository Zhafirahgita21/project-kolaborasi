document.addEventListener('DOMContentLoaded', () => {
    let selectedPaymentMethod = 'Transfer bank';

    const paymentOptions = document.querySelectorAll('.payment-option');
    const btnBuatPesanan = document.getElementById('btnBuatPesanan');

    // Menangani Event Pilihan Pembayaran
    if (paymentOptions.length > 0) {
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                paymentOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectedPaymentMethod = option.getAttribute('data-payment');
            });
        });
    }

    // Menangani Event Klik Tombol "Buat Pesanan" (Mencegah Alert 2x)
    if (btnBuatPesanan) {
        btnBuatPesanan.onclick = () => {
            const namaInput = document.getElementById('namaLengkap');
            const waInput = document.getElementById('noWhatsApp');
            const alamatInput = document.getElementById('alamatLengkap');

            const nama = namaInput ? namaInput.value.trim() : '';
            const wa = waInput ? waInput.value.trim() : '';
            const alamat = alamatInput ? alamatInput.value.trim() : '';

            if (!nama || !wa || !alamat) {
                alert('Harap isi semua kolom informasi pengiriman!');
                return;
            }

            alert(`Pesanan Berhasil Dibuat!\n\nNama: ${nama}\nNo WA: ${wa}\nAlamat: ${alamat}\nMetode Pembayaran: ${selectedPaymentMethod}\nTotal: Rp 36.000`);
        };
    }
});