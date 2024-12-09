const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

console.log(open, close, container);

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  close.style.display = "none";
  open.style.display = "block";
});
