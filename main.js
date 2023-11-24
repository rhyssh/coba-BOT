function kirimPesan() {

    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var pesan = document.getElementById("pesan");
    var tanggal = document.getElementById("tanggal").value;
    var hari = document.getElementById("hari").value;
    var bulan = document.getElementById("bulan").value;
    var jam = document.getElementById("jam").value;
    var menit = document.getElementById("menit").value;

    var date = new Date();
    const dayNames = ["senin", "selasa", "rabu", "kamis", "jum'at", "sabtu", "ahad"];
    const hari = date.getDay();
    const namaHari = dayNames[hari];
    const monthNames = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];
    const bulan = date.getMonth();
    const namaBulan = monthNames[bulan];

    var gabungan = `Nama: ${nama.value}
Email: ${email.value}
Pesan: ${pesan.value}
Waktu: ${tanggal} ${namaHari} ${namaBulan} ${jam}:${menit}`;

    var token = "6916554317:AAFYiMSaG-EEp1EZetgKhGrtcmgXG1OBjNk"; // Ganti dengan token bot yang kamu buat
    var grup = "-1002020558670"; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: "POST",
    })
}