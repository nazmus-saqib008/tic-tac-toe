console.log("welcome to tic tac toe");
let musicBG= new Audio("music.mp3");
let turnAudio= new Audio("ting.mp3");
// let gameOverAudio= new Audio("tictactoe/gameover.mp3");
let turn= "X";

// musicBG.play();

//change turn

const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

//check win

const checkWin=()=>{
    let wins=[
        [0, 1, 2, 35, 5, 0],
        [3, 4, 5, 35, 15, 0],
        [6, 7, 8, 35, 25, 0],
        [0, 3, 6, 25, 15, 90],
        [1, 4, 7, 35, 15, 90],
        [2, 5, 8, 45, 15, 90],
        [0, 4, 8, 35, 15, 45],
        [2, 4, 6, 35, 15, -45],
    ];
    let gameover= false;
    let boxtext= document.getElementsByClassName("boxText");
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            // gameOverAudio.play();
            let wintext= document.getElementById("infotext");
            wintext.innerText= boxtext[e[0]].innerText+ " Won";
            gameover= true;
            console.log("won!");
            let line= document.querySelector(".line");
            line.style.width= "30vw";
            line.style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//game logic

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxText= element.querySelector(".boxText");
    element.addEventListener('click', ()=>{
        if(boxText.innerText===""){
            turnAudio.play();
            boxText.innerText= turn;
            turn = changeTurn();
        }
        let turnText= document.getElementById("infotext");
        turnText.innerText= "turn for "+ turn;
        checkWin();
    })
})

//reset

let btn= document.getElementById("reset");
btn.addEventListener('click', ()=>{
    // location.reload();
    // gameOverAudio.pause();
    let boxes= document.querySelectorAll(".boxText");
    Array.from(boxes).forEach((e)=>{
        e.innerText="";
    })
    turn= "X";
    let turnText= document.getElementById("infotext");
    turnText.innerText= "turn for "+ turn;
    let line= document.querySelector(".line");
    line.style.width= "0vw";
})
