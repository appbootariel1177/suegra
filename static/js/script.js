document.addEventListener("DOMContentLoaded", function () {
    const botonesContainer = document.getElementById("botones");
    const audio = document.getElementById("audio");

    // Lista de frases con audios
    const frases = [
        { texto: "Tengo hambre", audio: "static/audio/hambre.mp3" },
        { texto: "Tengo sed", audio: "static/audio/sed.mp3" },
        { texto: "Necesito ayuda", audio: "static/audio/ayuda.mp3" },
        { texto: "Me siento cansada", audio: "static/audio/cansada.mp3" },
        { texto: "Quiero ir al baño", audio: "static/audio/baño.mp3" },
        { texto: "Me duele algo", audio: "static/audio/dolor.mp3" }
    ];

    // Generar botones dinámicamente
    frases.forEach(frase => {
        let btn = document.createElement("button");
        btn.textContent = frase.texto;
        btn.style.backgroundColor = getRandomColor();
        btn.addEventListener("click", function () {
            audio.src = frase.audio;
            audio.play();
        });
        botonesContainer.appendChild(btn);
    });

    // Generar color aleatorio
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
