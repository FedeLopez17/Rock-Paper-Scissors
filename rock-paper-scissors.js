const dots = document.querySelectorAll(".dot");
const containerOne = document.querySelector(".outer-container.one");
const containerTwo = document.querySelector(".outer-container.two");
const containerThree = document.querySelector(".outer-container.three");
const playerDiv = document.querySelector(".player-choice");
const computerDiv = document.querySelector(".computer-choice");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {button.addEventListener("click", () => {game(button.id)})});
const user = document.querySelector("#user");
const pc = document.querySelector("#pc");
let counter = 1, wonGames = 0, lostGames = 0;
let gameOver = false;


function computerPlay(){
    const choice = Math.floor(Math.random() * 100);
    const result = (choice >= 1 && choice < 34) ? "r" : (choice > 66) ? "s" : "p";
    return result;
}

function removeTransition(e){
    if (e.propertyName !== "transform") return;
    this.classList.remove("choice");
  }

function selectImage (who, selection){
    if (who === "user"){
        user.src = (selection === "r") ? "./images/rock1.png" : (selection === "p") ? "./images/paper1.png" : "./images/scissors1.png";
        user.style.cssText= "border-radius:0;";
        user.parentNode.style.cssText = "background-color: white;";
    }
    else{
        pc.src = (selection === "r") ? "./images/rock2.png" : (selection === "p") ? "./images/paper2.png" : "./images/scissors2.png";
        pc.style.cssText= "border-radius:0;";
        pc.parentNode.style.cssText = "background-color: white;";
    }
}


function playRound(playerSelection){
    playerDiv.classList.add("choice");
    playerDiv.addEventListener("transitionend", removeTransition);
    const computerSelection = computerPlay();
    computerDiv.classList.add("choice"); 
    computerDiv.addEventListener("transitionend", removeTransition);
    setTimeout(function() {
        selectImage("user", playerSelection);
        selectImage("computer", computerSelection);
    }, 700);
    
    if (playerSelection === computerSelection) {
        return 2;
    }
    else if (playerSelection === "r"){
        if (computerSelection === "s"){
            return 0;
        }
        return 1;
    }
    else if (playerSelection === "p"){
        if (computerSelection === "r"){
            return 0;
        }
        return 1;
    }
    else if (playerSelection === "s"){
        if (computerSelection === "p"){
            return 0;
        }
        return 1;
    }
}   


function game(playersChoice){
    if (gameOver){
        return;
    }
    else{
        let round = playRound(playersChoice);
        if(round === 0){
            wonGames++;
            setTimeout(() => { dots[counter - 2].style.backgroundColor = "lime"}, 700)
        }
        if(round === 2){
            counter--;
        }
        if (round === 1){
            lostGames ++;
            setTimeout(() => { dots[counter - 2].style.backgroundColor = "red"}, 700)
        }
        counter++;
        if (counter > 5 || wonGames === 3 || lostGames === 3){
            gameOver = true;
            while (containerOne.firstChild){
                containerOne.removeChild(containerOne.firstChild);
            }
            while (containerTwo.firstChild){
                containerTwo.removeChild(containerTwo.firstChild);
            }
            while (containerThree.firstChild){
                containerThree.removeChild(containerThree.firstChild);
            }
            let message = document.createElement("h1");
            let finalOutcome = document.createElement("img");
            let playAgain = document.createElement("button");
            playAgain.innerHTML = "Play again";
            playAgain.onclick = () => window.location.reload();
            finalOutcome.src = (wonGames > lostGames) ? "./images/happy.png" : "./images/sad.png";
            message.textContent = (wonGames > lostGames) ? "You win!" : "You lose!";
            finalOutcome.style.cssText = "border-style: solid; border-radius: 60px; border-width: 16px;border-color: rgb(0, 58, 58);"
            containerOne.appendChild(message);
            containerTwo.appendChild(finalOutcome);
            containerThree.appendChild(playAgain);
            return;        
        }
    }
}

