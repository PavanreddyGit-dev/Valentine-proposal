// Typing animation
const text = "lover name 💖 Will you be my Valentine?";
let i = 0;
const title = document.getElementById("title");

function typeEffect() {
  if (i < text.length) {
    title.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// NO button逃跑 😈
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

// YES celebration 😍
document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = "<h1>YAY!! 💖💍 I knew it 😘</h1>";
});

// Floating hearts generator
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);
