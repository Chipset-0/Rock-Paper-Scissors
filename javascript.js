
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissBtn = document.querySelector('#scissors')
const results = document.querySelector('#resultsPara')
const score = document.querySelector('#scorePara')
const humanImage = document.querySelector('#humanImage')
const computerImage = document.querySelector('#computerImage')
rockBtn.addEventListener('click', () =>   playGame(0))
paperBtn.addEventListener('click', () =>  playGame(1))
scissBtn.addEventListener('click', () =>  playGame(2))

const ROCK_SOURCE = "images/rock.png"
const PAPER_SOURCE = "images/paper.png"
const SCISSORS_SOURCE = "images/scissors.png"

let humanScore = 0
let computerScore = 0


function playRound(player1Choice, player2Choice) {
    /*
    Checks if player 1 Choice beats player2Choice in Rock(0), Paper(1), Scissors(2). Returns 0 if Tie, 1 if Player1 Win and 2 if Player2 Win
    */
    if (player1Choice == player2Choice)
    {
        return 0
    }
    //Player 1
    if (player1Choice == 0)
    {
        if (player2Choice == 2)
        {
            return 1
        }
        else
        {
            return 2
        }
    }
    if (player1Choice == 1)
    {
        if (player2Choice == 2)
        {
            return 1
        }
        else
        {
            return 2
        }
    }
    if (player1Choice == 2)
    {
        if (player2Choice == 0)
        {
            return 1
        }
        else
        {
            return 2
        }
    }

}

function updateImages(humanChoice, computerChoice)
{
    switch (humanChoice)
    {
        case 0:
            humanImage.src = ROCK_SOURCE
            break;
        case 1:
            humanImage.src = PAPER_SOURCE
            break;
        case 2:
            humanImage.src = SCISSORS_SOURCE
            break;
    }
    switch (computerChoice)
    {
        case 0:
            computerImage.src = ROCK_SOURCE
            break;
        case 1:
            computerImage.src = PAPER_SOURCE
            break;
        case 2:
            computerImage.src = SCISSORS_SOURCE
            break;
    }
}


function getComputerChoice() {
    let result = -1
    switch (Math.floor(Math.random() * 3))
    {
        case 0:
            result = 0
            break;
        case 1:
            result = 1
            break;
        case 2:
        case 3:
            result = 2
            break;
    }
    return result
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice()
    updateImages(humanChoice, computerChoice)
    switch(playRound(humanChoice, computerChoice))
    {
        case 0:
            //Tie
            results.textContent = "It was a Tie."
            break;
        case 1:
            results.textContent = "You win!"
            humanScore += 1
            break;
        case 2:
            results.textContent = "You Lost..."
            computerScore += 1
            break;
    }
    if (humanScore >= 5)
    {
        scorePara.textContent = "Win!" + " | " + computerScore
        results.textContent = "Human Victory!"
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore >= 5)
    {
        scorePara.textContent = humanScore + " | " + "Win!"
        results.textContent = "Computer Victory!"
        humanScore = 0
        computerScore = 0
    }
    else
    {
        scorePara.textContent = humanScore + " | " + computerScore
    }
}
