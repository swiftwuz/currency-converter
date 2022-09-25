const dropList = document.querySelectorAll(".drop-list select");
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for (currency_code in countrycode){
        let selected;
        if (i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        } else if (i == 1){
            selected = currency_code == "GHS" ? "selected" : "";
        }
        // console.log(currency_code)
        let optionTag =  `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }    

    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target); 
    })
}

function loadFlag(element){
    for (code in countrycode){
        if (code == element.value){
            let imgTag = element.parentElement.querySelector("img ");
            imgTag.src = `https://countryflagsapi.com/png/${countrycode[code]}`; 
        }
    }
}

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
})

// window.addEventListener("load", () =>{
//     getExchangeRate();
// });

const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () =>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();

})

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");

    let amountVal = amount.value;
    if (amountVal == "" || amountVal == "0"){
        amountVal = 1;
        amount.value = "1";
    }
    exchangeRateTxt.innerText = "Loading rate...";
    let url = `https://v6.exchangerate-api.com/v6/ccbc47815dd70fdb8f65ff3d/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalAmount = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalAmount} ${toCurrency.value}`;
        console.log(totalAmount)
    });
}