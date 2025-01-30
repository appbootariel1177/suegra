document.addEventListener("DOMContentLoaded", function () {
    const botonesContainer = document.getElementById("botones");
    const audio = document.getElementById("audio");

    // Lista de frases con audios
    const frases = [
        { texto: "Quiero dormir", audio: "static/audio/quiero dormir.mp3" },
        { texto: "Quiero ir al baño", audio: "static/audio/quiero ir al baño.mp3" },
        { texto: "Me duele la pierna", audio: "static/audio/me duele la pierna.mp3" },
        { texto: "Masajes en las piernas", audio: "static/audio/masajes en las piernas.mp3" },
        { texto: "Acomodar almuada", audio: "static/audio/acomodame la almuada.mp3" },
        { texto: "Saludo cordial", audio: "static/audio/romer los huevos.mp3" }
    ];

    // Generar botones dinámicamente
    frases.forEach(frase => {
        let btn = document.createElement("button");
        btn.textContent = frase.texto;
        btn.addEventListener("click", function () {
            audio.src = frase.audio;
            audio.play();
        });
        botonesContainer.appendChild(btn);
    });
});
