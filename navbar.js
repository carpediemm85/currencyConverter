const inputs = document.querySelectorAll('.left-li')
const otps = document.querySelectorAll('.output-li')
const rates = document.querySelector('.selected-curr')
const rates1 = document.querySelector('.selected-curr1')
const inputRate = document.getElementById('input')
const converted = document.querySelector('.converted-curr')

inputs.forEach(item => {
  console.log(item);
  item.addEventListener('click', (e) => {
    
    isDeletedLeft()
    e.target.classList.add("select-curr");
    getLeftBtnText=item.innerHTML
    getData("https://api.exchangerate.host/latest")
    





  })
})


function isDeletedLeft() {
  inputs.forEach(element=>{
    element.classList.remove('select-curr')
  });
}







otps.forEach(item => {
  console.log(item);
  item.addEventListener('click', (e) => {
    
    isDeletedRight()
    e.target.classList.add("select-curr");
    getRightBtnText = item.innerHTML
    getData("https://api.exchangerate.host/latest")
  })
})


function isDeletedRight() {
  otps.forEach(element=>{
    element.classList.remove('select-curr')
  });
}

let getLeftBtnText = 'RUB'
let getRightBtnText = 'USD'
const defaultValue=5000
getData("https://api.exchangerate.host/latest")


async function getData(url){
  const promis = await fetch(`${url}?base=${getLeftBtnText}&symbols=${getRightBtnText}`);
  const promis1 = await fetch(`${url}?base=${getRightBtnText}&symbols=${getLeftBtnText}`);
  const data = await promis.json()
  console.log(data);
  const data1 = await promis1.json()

  rates.textContent = `1 ${getLeftBtnText} = ` + data.rates[`${getRightBtnText}`] + ` ${getRightBtnText}`;
  rates1.textContent = `1 ${getRightBtnText} = ` + data1.rates[`${getLeftBtnText}`] + ` ${getLeftBtnText}`;
  
  converted.innerHTML = (inputRate.value?inputRate.value*data.rates[`${getRightBtnText}`]:defaultValue*data.rates[`${getRightBtnText}`]).toFixed(3)

}


//data.rates[`${getRightBtnText}`]
