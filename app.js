const navLi = document.querySelectorAll(".nav-list > li");
const rates = document.querySelector(".selected-curr");

const inputRub = document.querySelector(".input-first-li");
const inputUsd = document.querySelector('.input-usd')
const inputEur = document.querySelector('.input-eur')
const inputGbp = document.querySelector('.input-last-li')

const otpRub = document.querySelector(".output-first-li");
const otpUsd = document.querySelector('.output-usd')
const otpEur = document.querySelector('.output-eur')
const otpGbp = document.querySelector('.output-last-li')




inputRub.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest?base=RUB&symbols=USD ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 RUB = " + data.rates.USD +' USD';
    });
    
    //change design of button
    inputRub.classList.add("select-curr");
    
    inputEur.classList.remove("select-curr");
    inputGbp.classList.remove("select-curr");
    inputUsd.classList.remove("select-curr");



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
    inputUsd.classList.add("select-curr");

    inputEur.classList.remove("select-curr");
    inputGbp.classList.remove("select-curr");
    inputRub.classList.remove("select-curr");
});




inputEur.addEventListener("click", () => {

  fetch("https://api.exchangerate.host/latest?base=EUR&symbols=RUB ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 EUR = " + data.rates.RUB + ' RUB';
    });
    
    inputEur.classList.add("select-curr");

    inputRub.classList.remove("select-curr");
    inputGbp.classList.remove("select-curr");
    inputUsd.classList.remove("select-curr");

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
    inputGbp.classList.add("select-curr");

    inputEur.classList.remove("select-curr");
    inputRub.classList.remove("select-curr");
    inputUsd.classList.remove("select-curr");

});






otpRub.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest?base=RUB&symbols=USD ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 RUB = " + data.rates.USD +' USD';
    });
    
    //change design of button
    otpRub.classList.add("select-curr");
    
    otpEur.classList.remove("select-curr");
    otpGbp.classList.remove("select-curr");
    otpUsd.classList.remove("select-curr");



  });


otpUsd.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest?base=USD&symbols=RUB ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 USD = " + data.rates.RUB + ' RUB';
    });
    


    //change desing of button
    otpUsd.classList.add("select-curr");

    otpEur.classList.remove("select-curr");
    otpGbp.classList.remove("select-curr");
    otpRub.classList.remove("select-curr");
});




otpEur.addEventListener("click", () => {

  fetch("https://api.exchangerate.host/latest?base=EUR&symbols=RUB ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 EUR = " + data.rates.RUB + ' RUB';
    });
    
    otpEur.classList.add("select-curr");

    otpRub.classList.remove("select-curr");
    otpGbp.classList.remove("select-curr");
    otpUsd.classList.remove("select-curr");

});



otpGbp.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest?base=GBP&symbols=RUB ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      rates.textContent = "1 GBP = " + data.rates.RUB + ' RUB';
      
    });
    

    //change desing of button
    otpGbp.classList.add("select-curr");

    otpEur.classList.remove("select-curr");
    otpRub.classList.remove("select-curr");
    otpUsd.classList.remove("select-curr");

});