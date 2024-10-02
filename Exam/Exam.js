
function shoppingcartIncrease(){
    let cartnumber = document.querySelector("#cartnumber");
    let currentNumber = parseInt(cartnumber.innerText);
    currentNumber++;
    cartnumber.innerText = currentNumber;
}

function message(){
    alert("Contact us at 555-555-555");
}

function sortby(){
    let sortByValue = document.querySelector(".bodycenter span");
    let currentSortByValue = document.querySelector("#bestselling").value;
    sortByValue.innerText = currentSortByValue;
}