const navLi = document.querySelectorAll(".nav-list > li");
let inputCurr = document.querySelectorAll(".currency-list > li");

navLi.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.color = "black";
  });
});

// document.querySelector(".currency-list > li").addEventListener("click", () => {
//   inputCurr.style.backgroundColor = "#833AE0";
//   inputCurr.style.color = "white";
// });


inputCurr.forEach((item) => {
  item.addEventListener("click", () => {
    inputCurr.style.backgroundColor = "#833AE0";
    inputCurr.style.color = "white";
  });
});
