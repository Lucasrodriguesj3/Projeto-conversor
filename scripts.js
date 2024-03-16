const convertButton = document.querySelector(".convert-button")

function convertValues(){

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.0

    const covertedValue = inputCurrencyValue / dolarToday

    console.log(covertedValue)
    
}

convertButton.addEventListener("click", convertValues)

