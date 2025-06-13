const messages = [
  "1. Bé iu là ánh nắng của Anh 💛",
  "2. Anh nghĩ về bé mỗi ngày 💭",
  "3. Nụ cười bé làm Anh tan chảy 🥰",
  "4. Bé là điều dễ thương nhất trên đời 🌸",
  "5. Không ai thương bé như Anh đâu đó 😚",
  "6. Mỗi ngày bên bé là phép màu ✨",
  "7. Bé cute như mèo con lun 🐱",
  "8. Anh muốn ôm bé mãi mãi 💞",
  "9. Bé là động lực sống của Anh 💘",
  "10. Anh yêu bé... nhiều hơn cả vũ trụ này 🚀",
];

// Rơi từng dòng yêu thương
messages.forEach((msg, i) => {
  setTimeout(() => {
    const div = document.createElement("div");
    div.className = "love-message";
    div.style.left = `${10 + Math.random() * 80}%`;
    div.innerText = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 6000);
  }, i * 1500);
});

// Sau khi hết -> hiện nút trái tim + dòng chữ
setTimeout(() => {
  const wrapper = document.createElement("div");
  wrapper.className = "heart-button-wrapper";

  const label = document.createElement("div");
  label.className = "heart-label";
  label.innerText = "mời bé iu ấn vô";

  const button = document.createElement("button");
  button.className = "heart-button";
  button.innerText = "❤️";
  button.onclick = () => {
    window.location.href = "https://thotrangcute.github.io/tim-tim-tim/";
  };

  wrapper.appendChild(label);
  wrapper.appendChild(button);
  document.body.appendChild(wrapper);
}, messages.length * 1500 + 1000);

// Tim bay
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "flying-heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
