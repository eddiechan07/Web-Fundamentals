let likesCount1 = document.querySelector("#likes1")
let likesCount2= document.querySelector("#likes2")
let likesCount3 = document.querySelector("#likes3")
function likeIncrease(likesCount1){
    let currentLikes = parseInt(likesCount1);
    currentLikes++;
    likesCount1=`${currentLikes} Like(s)`;
}
function likeIncrease(likesCount2){
    let currentLikes = parseInt(likesCount2);
    currentLikes++;
    likesCount2=`${currentLikes} Like(s)`;
}
function likeIncrease(likesCount3){
    let currentLikes = parseInt(likesCount3.innerText);
    currentLikes++;
    likesCount3.innerText=`${currentLikes} Like(s)`;
}