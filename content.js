const existing = document.getElementById("crt-overlay");
if (existing) {
  existing.remove(); // Toggle off
} else {
  const overlay = document.createElement("div");
  overlay.id = "crt-overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 999999;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 2px
    );
    mix-blend-mode: multiply;
    backdrop-filter: contrast(1.2) brightness(0.9);
  `;
  document.body.appendChild(overlay);
}
