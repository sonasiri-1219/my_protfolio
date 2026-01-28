// Scroll animation safety (future-proof)
document.querySelectorAll(".fade-up").forEach(el => {
  el.style.animationPlayState = "running";
});
