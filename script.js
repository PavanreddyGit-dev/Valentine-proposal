const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = "<h1>Yay!! 💖 I knew you’d say YES 😘</h1>";
});
