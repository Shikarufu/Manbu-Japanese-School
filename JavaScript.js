function createSakura() {
  const sakura = document.createElement("div");
  sakura.classList.add("sakura");

  sakura.style.left = Math.random() * window.innerWidth + "px";

  // Responsive size: smaller on mobile
  let baseSize = window.innerWidth < 600 ? 8 : 15;
  const size = Math.random() * baseSize + baseSize;
  sakura.style.width = size + "px";
  sakura.style.height = size + "px";

  sakura.style.animationDuration = (Math.random() * 6 + 6) + "s";

  document.body.appendChild(sakura);

  setTimeout(() => sakura.remove(), 12000);
}

setInterval(createSakura, 200);