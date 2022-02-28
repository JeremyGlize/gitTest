// const modal = document.getElementById("#maModal");
// const btn = document.getElementById("#modalBtn");
// const span = document.getElementsByClassName("close");

// btn.onclick = function () {
//   modal.style.display = "block";
//   console.log(modal);
// };

// click.addEventListener("click", () => {
//   appear.classList.toggle("dNone");
// });

const clique = document.querySelectorAll(".btn");
const appear = document.querySelectorAll(".dNone");

// console.log(clique);
// console.log(appear);

clique.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    appear[index].classList.toggle("dNone");
  });
});
