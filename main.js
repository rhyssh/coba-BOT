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

    const namaHari = hari == 1 ? 'senin' : hari == 2 ? 'selasa' : hari == 3 ? 'rabu' : hari == 4 ? 'kamis' : hari == 5 ? "jum'at" : hari == 6 ? 'sabtu' : hari == 7 ? 'ahad' : hari;
    const namaBulan = bulan == 1 ? 'januari' : bulan == 2 ? 'februari' : bulan == 3 ? 'maret' : bulan == 4 ? 'april' : bulan == 5 ? 'mei' : bulan == 6 ? 'juni' : bulan == 7 ? 'juli' : bulan == 8 ? 'agustus' : bulan == 9 ? 'september' : bulan == 10 ? 'oktober' : bulan == 11 ? 'november' : bulan == 12 ? 'desember' : bulan;
    // var tanggal = date.getDate();
    // var hari = date.getDay();
    // var bulan = date.getMonth();
    // var jam = date.getHours();

    var gabungan = 'Nama:%0A' + nama.value + '%0AEmail:' + email.value + '%0APesan:%0A' + pesan.value + '%0AWaktu:%0A' + tanggal + ',' + namaHari + ',' + namaBulan + '%0AJam:%0A' + jam + ':' + menit;

    var token = '6916554317:AAFYiMSaG-EEp1EZetgKhGrtcmgXG1OBjNk'; // Ganti dengan token bot yang kamu buat
    var grup = '-1002020558670'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}