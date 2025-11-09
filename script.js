const messages = [
 "Te seguiré amando en silencio 💔",
  "Fuiste mi historia favorita, aunque no tuvo final feliz 🌧️",
  "A veces amar también significa dejar ir 🌙",
  "Mi corazón aún te busca entre recuerdos perdidos 🕯️",
  "Te pienso en cada noche donde el silencio grita tu nombre 🌫️",
  "Nunca supe cómo dejar de extrañarte 💭",
  "Ojalá el destino nos diera otra oportunidad 💧",
  "Tu ausencia pesa más que mil palabras no dichas 🖤",
  "Aunque no estés, sigues viviendo en mis pensamientos 🌌",
  "Te amé tanto que aún duele recordarlo 🌹"
];
function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;

  bubble.style.position = "absolute";
  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";

  const container = document.getElementById("bubbles-text");
  container.appendChild(bubble);

  setTimeout(() => {
    const rect = bubble.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      const newLeft = window.innerWidth - rect.width - 10;
      bubble.style.left = `${newLeft}px`;
    }

    if (rect.bottom > window.innerHeight) {
      const newTop = window.innerHeight - rect.height - 10;
      bubble.style.top = `${newTop}px`;
    }
  });
}
setTimeout(() => {
  const rect = bubble.getBoundingClientRect();

  if (rect.right > window.innerWidth) {
    const newLeft = window.innerWidth - rect.width - 10;
    bubble.style.left = `${newLeft}px`;
  }

  if (rect.bottom > window.innerHeight) {
    const newTop = window.innerHeight - rect.height - 10;
    bubble.style.top = `${newTop}px`;
  }

  if (rect.left < 0) {
    bubble.style.left = "10px";
  }

  if (rect.top < 0) {
    bubble.style.top = "10px";
  }
}, 10);

setTimeout(() => {
  bubble.remove();
}, 8000);

setInterval(createTextBubble, 500);