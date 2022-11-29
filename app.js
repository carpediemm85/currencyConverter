const navLi = document.querySelectorAll(".nav-list > li");
const rates = document.querySelector(".selected-curr");

const inputRub = document.querySelector(".input-first-li");
const inputUsd = document.querySelector('.input-usd')
const inputEur = document.querySelector('.input-eur')
const inputGbp = document.querySelector('.input-last-li')





inputRub.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest?base=RUB&symbols=USD ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 RUB = " + data.rates.USD +' USD';
    });
    
    //change design of button
    inputRub.style.backgroundColor = "#833AE0";
    inputRub.style.color = "white";
});


inputUsd.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest?base=USD&symbols=RUB ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 USD = " + data.rates.RUB + ' RUB';
    });
    

    //change desing of button
    inputUsd.style.backgroundColor = "#833AE0";
    inputUsd.style.color = "white";
    
});




inputEur.addEventListener("click", () => {

  fetch("https://api.exchangerate.host/latest?base=EUR&symbols=RUB ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 EUR = " + data.rates.RUB + ' RUB';
    });
    
    inputEur.addClass()

    //change desing of button
    inputEur.style.backgroundColor = "#833AE0";
    inputEur.style.color = "white";
    
});



inputGbp.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest?base=GBP&symbols=RUB ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 GBP = " + data.rates.RUB + ' RUB';
      
    });
    

    //change desing of button
    inputGbp.style.backgroundColor = "#833AE0";
    inputGbp.style.color = "white";
    
});