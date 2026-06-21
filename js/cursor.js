const root = document.documentElement;

window.addEventListener("mousemove", (e) => {
  root.style.setProperty("--x", `${e.clientX}px`);
  root.style.setProperty("--y", `${e.clientY}px`);
});