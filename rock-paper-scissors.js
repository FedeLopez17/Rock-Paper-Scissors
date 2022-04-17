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
        console.log("It's a tie!")
        return 2;
    }
    else if (playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            console.log("You win! Rock beats Scissors");
            return 0;
        }
        console.log("You lose! Paper beats Rock");
        return 1;
    }
    else if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            console.log("You win! Paper beats Rock");
            return 0;
        }
        console.log("You lose! Scissors beat Paper");
        return 1;
    }
    else if (playerSelection === "Scissors"){
        if (computerSelection === "Paper"){
            console.log("You win! Scissors beat Paper");
            return 0;
        }
        console.log("You lose! Rock beats Scissors");
        return 1;
    }
    else {
        console.log("Invalid input, try Again");
        return 400;
    }
}   

function game(){
    let wonGames = 0;
    let tiedGames = 0;
    for (let i = 1; i < 6; i++){
        console.log(`Game number: ${i}`);
        round = playRound();
        if (round === 400){
            i--;
        }
        if(round === 0){
            wonGames++;
        }
        if(round === 2){
            tiedGames++;
        }
    }

    lostGames = 5 - (wonGames + tiedGames);
    console.log(`Won games: ${wonGames}`);
    console.log(`Tied games: ${tiedGames}`);
    console.log(`Lost games: ${lostGames}`);
    if (wonGames === lostGames){
        console.log("It's a tie!");
        return; 
    }
    if (wonGames > lostGames){
        console.log("You won!");
        return;
    }
    else {
        console.log("You lost!");
        return;
    }
}


game();