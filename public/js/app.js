const modals = document.querySelectorAll(".modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtns = document.querySelectorAll(".closeBtn");
// to make sure that it ganna start from the first modal 
let current = 0; 

openBtn.addEventListener("click", () => {
  if(modals.length === 0) return; 
  modals[current].style.display = "flex";
});

// Close buttons and also to click outside the btn 
closeBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modals[i].style.display = "none";
    current = (current + 1) % modals.length; 
  });
});


modals.forEach((modal, i) => {
  modal.addEventListener("click", (e) => {
    if(e.target === modal){
      modal.style.display = "none";
      current = (current + 1) % modals.length; 
    }
  });
});
