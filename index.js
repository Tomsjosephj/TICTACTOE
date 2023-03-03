let playertext= document.getElementById("playertext")

let resetbtn=document.getElementById("restartbtn")

let boxes= Array.from(document.getElementsByClassName('box'))

let  nextgame=document.getElementById("nexttext")

let winningindicator= getComputedStyle(document.body).getPropertyValue('--winningblocks')

const otext= "O"

const xtext= "X"

let currentplayer= "X"
let spaces= Array(9).fill(null)

const startgame=()=>{
    boxes.forEach(box=>box.addEventListener('click', boxclicked))
}


function boxclicked(e){

    const id=e.target.id

    if(!spaces[id]){
        spaces[id]=currentplayer

        e.target.innerText=currentplayer

        if(playerwon()!==false){
            playertext.innerText=`${currentplayer} won`
    
             boxes.forEach(box=>box.removeEventListener('click',boxclicked))

             nextgame.innerHTML="Press Restart to continue"
            
            return

            
            
            let winningblocks= playerwon()

            winningblocks.map(box=>boxes[box].style.backgroundcolor=winningindicator)
        }
        
     


        currentplayer=currentplayer== xtext?otext:xtext

        
    }

}

const winningcombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]




]

function playerwon(){
    for (const condition of winningcombos) {

        let [a,b,c]= condition

        if(spaces[a] && (spaces[a]==spaces[b]) && (spaces[a]==spaces[c]))

        return[a,b,c]

    
        
    }
    return false
}
resetbtn.addEventListener("click", restart)

function restart(){
    spaces.fill(null)
    startgame()

    boxes.forEach(box=>{
        box.innerText=''
    })
    playertext.innerText='Tic Tac Toe'

    nextgame.innerText=""

    currentplayer= xtext

    

}
startgame()

