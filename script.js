// Typing animation
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

// NO button escape 😈
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

// YES click 💍
document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = "<h1>She said YES 😍💍</h1>";
});
