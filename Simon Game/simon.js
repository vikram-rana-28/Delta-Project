let gameSeq =[];
let useSeq =[];

let btns = ["red", "yellow", "green","purple"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function  gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 300);
}

function  userFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function (){
        btn.classList.remove("Flash");
    }, 300);
}

function levelUp(){
    useSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns (idx) {
    if(useSeq[idx] === gameSeq[idx]){
        if(useSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else {
        h2.innerHTML= `Game Over! Your score was <b>${level*5}</b> <br>Press any key to start Game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        }, 200);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    useColor = btn.getAttribute("id");
    useSeq.push(useColor);
    console.log(useColor)

    checkAns(useSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started= false;
    gameSeq=[];
    useSeq=[];
    level = 0;
}