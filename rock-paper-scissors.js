function computerPlay(){
    choice = Math.floor(Math.random() * 100);
    return (choice >= 1 && choice < 34) ? "Rock" : (choice > 66) ? "Scissors" : "Paper";
}

function playerSelection(){
    choice = prompt("Input your choice").toLowerCase();
    console.log(choice);
}

int = computerPlay();
playerSelection();
console.log(int);