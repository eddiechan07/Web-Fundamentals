function changeTheName(){
    let currentName = document.querySelector(".namecardheader");
    currentName.innerText="Eddie Chan";
}

function addConnection1(){
    let row1 = document.querySelector("#connectionRow1");
    row1.remove();
    let numberCount = document.querySelector("#number500");
    let currentCount = parseInt(numberCount.innerText)
    currentCount++;
    numberCount.innerText = currentCount;
}
function removeConnection1(){
    let row1 = document.querySelector("#connectionRow1");
    row1.remove();
    let numberCount = document.querySelector("#number500");
    let currentCount = parseInt(numberCount.innerText)
    currentCount--;
    numberCount.innerText = currentCount;
}
function addConnection2(){
    let row2 = document.querySelector("#connectionRow2");
    row2.remove();
    let numberCount = document.querySelector("#number500");
    let currentCount = parseInt(numberCount.innerText)
    currentCount++;
    numberCount.innerText = currentCount;
}
function removeConnection2(){
    let row2 = document.querySelector("#connectionRow2");
    row2.remove();
    let numberCount = document.querySelector("#number500");
    let currentCount = parseInt(numberCount.innerText)
    currentCount--;
    numberCount.innerText = currentCount;
}
