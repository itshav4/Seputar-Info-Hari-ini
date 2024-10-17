let step = 0;

function nextStep() {
    const confessionText = document.getElementById("confessionText");
    const revealButton = document.getElementById("revealButton");
    const message = document.getElementById("message");
    const acceptButton = document.getElementById("acceptButton");

    if (step === 0) {
        confessionText.innerHTML = "Setiap hari bersamamu selalu menjadi momen yang tak terlupakan...";
        revealButton.innerHTML = "Klik lagi";
    } else if (step === 1) {
        confessionText.innerHTML = "Aku mencoba menahan perasaan ini, tapi semakin hari semakin sulit...";
    } else if (step === 2) {
        confessionText.innerHTML = "Hatiku selalu bergetar setiap kali kita bertemu, setiap kali aku mendengar suaramu...";
    } else if (step === 3) {
        confessionText.innerHTML = "Dan sekarang, aku tak bisa lagi menyembunyikan apa yang ada di hatiku...";
    } else if (step === 4) {
        confessionText.innerHTML = "Aku ingin kau tahu sebuah rahasia yang sudah lama aku simpan...";
    } else if (step === 5) {
        confessionText.innerHTML = "Sebuah rahasia tentang perasaan yang selalu tumbuh setiap hari...";
    } else if (step === 6) {
        confessionText.innerHTML = "Apakah kamu siap mendengar sesuatu yang sangat penting bagiku?";
        revealButton.innerHTML = "Ya, aku siap!";
    } else if (step === 7) {
        confessionText.innerHTML = "Baiklah... Ini dia...";
        revealButton.innerHTML = "Klik untuk melihat pengakuan";
    } else if (step === 8) {
        revealButton.style.display = "none";  // Menghilangkan tombol setelah klik terakhir
        message.innerHTML = `
            Aku mencintaimu...<br><br>
            Sejak hari pertama aku mengenalmu, aku tahu ada sesuatu yang istimewa tentangmu.<br><br>
            Cara kamu tersenyum, cara kamu bicara, setiap detik yang kuhabiskan denganmu terasa seperti kebahagiaan yang tak tergambarkan.<br><br>
            Aku tak bisa lagi menahan perasaan ini, jadi aku harus memberitahumu...<br><br>
            Kamu adalah alasan aku tersenyum setiap hari. Kamu adalah orang yang selalu ada dalam pikiranku.<br><br>
            Dan sekarang, aku ingin tahu... Maukah kamu menjadi bagian dari hidupku? 💖
        `;
        message.classList.add("revealed");
        acceptButton.classList.remove("hidden-button");  // Menampilkan tombol "Terima Confession"
        acceptButton.classList.add("show-button");
    }

    step++;
}

function acceptConfession() {
    const acceptMessage = document.getElementById("acceptMessage");
    const acceptButton = document.getElementById("acceptButton");
    
    acceptMessage.innerHTML = `
        Terima kasih telah menerima perasaanku...<br><br>
        Aku berjanji akan membuatmu bahagia setiap hari, karena kamu adalah segalanya bagiku.<br><br>
        Bersamamu adalah impian yang ingin kujalani selamanya. 💖
    `;
    acceptMessage.classList.add("revealed");
    acceptButton.style.display = "none";  // Menghilangkan tombol setelah menerima confession
}
