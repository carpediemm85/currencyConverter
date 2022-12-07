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