setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "24px";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 800);
