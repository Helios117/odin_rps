function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    while (true){
        let choice = parseInt(prompt("Enter\n1.For Rock\n2. For Paper\n3.For Scissors"));
        switch(choice){
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
        }
    }
}

function playRound(humanChoice, computerChoice){
    let result, score;
    if (humanChoice === computerChoice) {result = "tied with"; score = 0;}
    else if ( (humanChoice === "rock" && computerChoice === "paper") 
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {result = "lost to"; score = -1;}
    else {result = "won against"; score = 1;}

    console.log(`Your choice of ${humanChoice} ${result} ${computerChoice}`);    
    return score;
}

function playGame(){
    let score = 0;
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        score += playRound(humanSelection, computerSelection);
    }
    if (score >0) console.log("You Won!");
    else if (score === 0) console.log("You tied with the computer.");
    else console.log("You lost.");
}

playGame();
