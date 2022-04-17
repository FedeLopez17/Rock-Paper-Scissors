function computerPlay(){
    choice = Math.floor(Math.random() * 100);
    result = (choice >= 1 && choice < 34) ? "Rock" : (choice > 66) ? "Scissors" : "Paper";
    console.log(result);
    return result;
}

function playerSelection(){
    choice = prompt("Input your choice").toLowerCase();
    let upperCaseFirstLetter = choice.charAt(0).toUpperCase();
    choice = upperCaseFirstLetter.concat(choice.substr(1).toLowerCase());
    console.log(choice);
    return choice;
}

function playRound(){
    const computerSelection = computerPlay();
    const playerSelection1 = playerSelection();
    if (playerSelection1 === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection1 === "Rock"){
        if (computerSelection === "Scissors"){
            return "You win! Rock beats Scissors";
        }
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection1 === "Paper"){
        if (computerSelection === "Rock"){
            return "You win! Paper beats Rock";
        }
        return "You lose! Scissors beat Paper";
    }
    else if (playerSelection1 === "Scissors"){
        if (computerSelection === "Paper"){
            return "You win! Scissors beat Paper";
        }
        return "You lose! Rock beats Scissors";
    }
    else {
        return "Invalid input!";
    }
}   


result = playRound();
console.log(result);