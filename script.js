console.log("Hello World!");

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
    let result;
    if (humanChoice === computerChoice) result = "tied with";
    else if ( (humanChoice === "rock" && computerChoice === "paper") 
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) result = "lost to";
    else result = "won against";

    console.log(`Your choice of ${humanChoice} ${result} ${computerChoice}`);    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

