function likesIncrease(){
    let likescount = document.querySelector("#likes");  // Select the DOM element
    let currentLikes = parseInt(likescount.innerText);  // Convert the inner text to a number
    currentLikes++;  // Increment the number
    likescount.innerText = `${currentLikes} like(s)`; 
}