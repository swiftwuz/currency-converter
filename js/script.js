const dropList = document.querySelectorAll(".drop-list select");
getButton = document.querySelectorAll("form button");

for (let i = 0; i < dropList.length; i++) {
    for (currency_code in countrycode){
        let selected;
        if (i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        } else if (i == 1){
            selected = currency_code == "GHS" ? "selected" : "";
        }
        // console.log(currency_code)
        let optionTag =  `<option value="${currency_code}" ${selected}>${currency_code}</option>`
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }    
}

getButton.addEventListener("click", e =>{
    
})
