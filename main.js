function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');
    var tanggal = document.getElementById('tanggal').value;
    var hari = document.getElementById('hari').value;
    var bulan = document.getElementById('bulan').value;
    var jam = document.getElementById('jam').value;
    var menit = document.getElementById('menit').value;

    var date = new Date();

    // var tanggal = date.getDate();
    // var hari = date.getDay();
    // var bulan = date.getMonth();
    // var jam = date.getHours();

    var gabungan = 'Nama:%0A' + nama.value + '%0AEmail:' + email.value + '%0APesan:%0A' + pesan.value + '%0AWaktu:%0A' + tanggal + ',' + hari + ',' + bulan + '%0AJam:%0A' + jam + ':' + menit;

    var token = '6916554317:AAFYiMSaG-EEp1EZetgKhGrtcmgXG1OBjNk'; // Ganti dengan token bot yang kamu buat
    var grup = '-1002020558670'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}