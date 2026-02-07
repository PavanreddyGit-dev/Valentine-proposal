// Typing effect
const text = "LOVER NAME 💖 Will you be my Valentine?";
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

// NO button escape
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

// YES click
document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="yes-image-container">
      <img src="yes.jpg" alt="Love Image">
    </div>
  `;
});

// Floating hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 400);
