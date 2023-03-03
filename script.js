var up=document.querySelector(".up")
var down=document.querySelector(".down")
var left=document.querySelector(".left")
var right=document.querySelector(".right")
var ball=document.querySelector(".ball")

function moveUp(){
    let temp=Number(ball.offsetTop)-50;
    if(temp<0){
        alert("Screen Overflow!");
        return;
    }
    ball.style.top=temp+"px";
}
function moveDown(){
    let temp=Number(ball.offsetTop)+50;
    if(temp>650){
        alert("Screen Overflow!");
        return;
    }
    ball.style.top=temp+"px";
}
function moveLeft(){
    let temp=Number(ball.offsetLeft)-50;
    if(temp<0){
        alert("Screen Overflow!");
        return;
    }
    ball.style.left=temp+"px";
}
function moveRight(){
    let temp=Number(ball.offsetLeft)+50;
    if(temp>1500){
        alert("Screen Overflow!");
        return;
    }
    ball.style.left=temp+"px";
}

up.addEventListener("click", moveUp);
down.addEventListener("click", moveDown);
left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);
