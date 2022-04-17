function computerPlay(){
    choice = Math.floor(Math.random() * 100);
    result = (choice >= 1 && choice < 34) ? "Rock" : (choice > 66) ? "Scissors" : "Paper";
    console.log(result); // Just for test purposes
    return result;
}

function playerSelect(){
    choice = prompt("Input your choice").toLowerCase();
    let upperCaseFirstLetter = choice.charAt(0).toUpperCase();
    choice = upperCaseFirstLetter.concat(choice.substr(1).toLowerCase());
    console.log(choice); // Just for test purposes
    return choice;
}

function playRound(){
    const computerSelection = computerPlay();
    const playerSelection = playerSelect();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            return "You win! Rock beats Scissors";
        }
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            return "You win! Paper beats Rock";
        }
        return "You lose! Scissors beat Paper";
    }
    else if (playerSelection === "Scissors"){
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