function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');

    var date = new Date();

    var tanggal = date.getDate();
    var hari = date.getDay();
    var bulan = date.getMonth();
    var jam = date.getHours();

    var gabungan = 'Nama:%0A' + nama.value + '%0AEmail:%0A' + email.value + '%0APesan:%0A' + pesan.value + '%0ATanggal:%0A' + tanggal + '%0AHari:%0A' + hari + '%0ABulan:%0A' + bulan + '%0AJam:%0A' + jam;

    var token = '6916554317:AAFYiMSaG-EEp1EZetgKhGrtcmgXG1OBjNk'; // Ganti dengan token bot yang kamu buat
    var grup = '-1002020558670'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}