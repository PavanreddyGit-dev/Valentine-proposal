const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const heartsContainer = document.querySelector(".hearts");

/* Floating hearts generator */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}, 500);

/* NO button moves away */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* YES click – show image */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="yes-image-container">
      <div class="yes-text">Porra gottam 💖</div>
      <img src="yes.jpg" alt="Love Image">
    </div>
  `;
});
