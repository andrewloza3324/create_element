let d = document.querySelector(".div");
function getNumber() {
  return Math.floor(Math.random() * 200);
}

for (let i = 0; i < 100; i++) {
  let h = document.createElement("h1");
  h.textContent = getNumber();
  h.classList.add("text");
  d.append(h);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    let smallNumbers = document.querySelectorAll(".text");
    for (let a of smallNumbers) {
      if (a.textContent >= 20) {
        a.remove();
      }
    }
  }
});
