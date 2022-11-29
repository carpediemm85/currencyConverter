const bank = document.querySelector("#bank");
const biznes = document.querySelector("#biznes");
const invest = document.querySelector("#invest");
const str = document.querySelector("#str");
const mob = document.querySelector("#mob");
const trav = document.querySelector("#trav");
const fun = document.querySelector("#fun");

bank.addEventListener("click", () => {
  bank.classList.add(".nav-li-black");

  biznes.classList.remove(".nav-li-black");
  invest.classList.remove(".nav-li-black");
  str.classList.remove(".nav-li-black");
  mob.classList.remove(".nav-li-black");
  trav.classList.remove(".nav-li-black");
  fun.classList.remove(".nav-li-black");
});

biznes.addEventListener("click", () => {
  biznes.classList.add(".nav-li-black");

  bank.classList.remove(".nav-li-black");
  invest.classList.remove(".nav-li-black");
  str.classList.remove(".nav-li-black");
  mob.classList.remove(".nav-li-black");
  trav.classList.remove(".nav-li-black");
  fun.classList.remove(".nav-li-black");
});

invest.addEventListener("click", () => {
  invest.classList.add(".nav-li-black");

  bank.classList.remove(".nav-li-black");
  biznes.classList.remove(".nav-li-black");
  str.classList.remove(".nav-li-black");
  mob.classList.remove(".nav-li-black");
  trav.classList.remove(".nav-li-black");
  fun.classList.remove(".nav-li-black");
});

str.addEventListener("click", () => {
  str.classList.add(".nav-li-black");

  bank.classList.remove(".nav-li-black");
  invest.classList.remove(".nav-li-black");
  biznes.classList.remove(".nav-li-black");
  mob.classList.remove(".nav-li-black");
  trav.classList.remove(".nav-li-black");
  fun.classList.remove(".nav-li-black");
});

mob.addEventListener("click", () => {
  mob.classList.add(".nav-li-black");

  bank.classList.remove(".nav-li-black");
  invest.classList.remove(".nav-li-black");
  biznes.classList.remove(".nav-li-black");
  str.classList.remove(".nav-li-black");
  trav.classList.remove(".nav-li-black");
  fun.classList.remove(".nav-li-black");
});

trav.addEventListener("click", () => {
  trav.classList.add(".nav-li-black");

  bank.classList.remove(".nav-li-black");
  invest.classList.remove(".nav-li-black");
  biznes.classList.remove(".nav-li-black");
  str.classList.remove(".nav-li-black");
  mob.classList.remove(".nav-li-black");
  fun.classList.remove(".nav-li-black");
});

fun.addEventListener("click", () => {
  fun.classList.add(".nav-li-black");

  bank.classList.remove(".nav-li-black");
  invest.classList.remove(".nav-li-black");
  biznes.classList.remove(".nav-li-black");
  str.classList.remove(".nav-li-black");
  mob.classList.remove(".nav-li-black");
  trav.classList.remove(".nav-li-black");
});
