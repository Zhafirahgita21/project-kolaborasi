document.addEventListener('DOMContentLoaded', () => {
    let selectedPaymentMethod = 'Transfer bank';

    // Ambil elemen metode pembayaran
    const paymentOptions = document.querySelectorAll('.payment-option');
    const btnBuatPesanan = document.getElementById('btnBuatPesanan');

    // Menangani Event Pilihan Pembayaran
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Hapus kelas 'selected' dari semua opsi
            paymentOptions.forEach(opt => opt.classList.remove('selected'));

            // Tambahkan kelas 'selected' pada yang dipilih
            option.classList.add('selected');

            // Simpan metode pembayaran yang dipilih
            selectedPaymentMethod = option.getAttribute('data-payment');
        });
    });

    // Menangani Event Klik Tombol "Buat Pesanan"
    btnBuatPesanan.addEventListener('click', () => {
        const nama = document.getElementById('namaLengkap').value.trim();
        const wa = document.getElementById('noWhatsApp').value.trim();
        const alamat = document.getElementById('alamatLengkap').value.trim();

        // Validasi input
        if (!nama || !wa || !alamat) {
            alert('Harap isi semua kolom informasi pengiriman!');
            return;
        }

        // Tampilkan konfirmasi/pesan sukses
        alert(`Pesanan Berhasil Dibuat!\n\nNama: ${nama}\nNo WA: ${wa}\nAlamat: ${alamat}\nMetode Pembayaran: ${selectedPaymentMethod}\nTotal: Rp 36.000`);
    });
});