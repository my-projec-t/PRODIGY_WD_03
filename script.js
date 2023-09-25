let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef= document.getElementById("message");
//winning pattern array
let winningPattern = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]];
//player 'x' plays first

let xTurn = true;
let count = 0;

const disableButton=()=>{
    btnRef.forEach((element)=> element.disabled=true);
    //enable popup
    popupRef.classList.remove("hide")
}

//enable all buttons for new game
const enableButtons=()=>{
    btnRef.forEach((element)=>{
        element.innerText="";
        element.disabled=false;
    })
    //disable popup
    popupRef.classList.add("hide");
}



//new game
newgameBtn.addEventListener("click",()=>{
    count=0;
    xTurn=true;
    enableButtons();
});
restartBtn.addEventListener("click",()=>{
    count=0;
    xTurn=true;
    enableButtons();    
})

//this is executed when player wins
const winFunction=(letter)=>{
    disableButton();
    if(letter == "X"){
        msgRef.innerHTML="'X' wins";
    }
    else{
        msgRef.innerHTML="'O' wins";
    }
}

//Function for draw
const drawFunction = ()=>{
    disableButton();
    msgRef.innerHTML="It's a Draw";
}

//win logic
const winChecker=()=>{
    //loop through all winning pattern
    for(let i of winningPattern){
        let [element1, element2, element3]=[
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //check if elements are filled
        //if 3 empt elements are same and would give win as would
        if(element1!="" && element2!="" && element3!=""){
            if(element1 == element2 && element2== element3){
                winFunction(element1);
            }
        }
    }
}

//Display x/o on click
btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xTurn){
            xTurn=false;
            element.innerText="X";
            element.disabled=true;
            // console.log("hii");
        }else{
            xTurn=true;
            element.innerText="O";
            element.disabled=true;
        }
        //increment count
        count +=1;
        if(count === 9){
            //it is a draw
            drawFunction();
        }
        //check for win on every click
        winChecker();
    })
})
//enable button and disbale popup
window.onload = enableButtons;