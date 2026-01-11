const modals = document.querySelectorAll(".modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtns = document.querySelectorAll(".closeBtn");

let current = 0; // start from first modal

openBtn.addEventListener("click", () => {
  if(modals.length === 0) return; // safety check
  modals[current].style.display = "flex";
  // current modal will increment only after it is closed
});

// Close buttons & click outside
closeBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modals[i].style.display = "none";
    current = (current + 1) % modals.length; // next modal ready
  });
});

modals.forEach((modal, i) => {
  modal.addEventListener("click", (e) => {
    if(e.target === modal){
      modal.style.display = "none";
      current = (current + 1) % modals.length; // next modal ready
    }
  });
});
