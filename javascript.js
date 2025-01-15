

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

function getHumanChoice(message) {
    let input = "Empty"
    let isValid = false
    let result = -1
    if (message === null)
    {
        message = "Rock(R), Paper(P) or Scissors(S)?"
    }
    while (!isValid) 
    {
        input = prompt(message)
        if (input != null)
        {
            switch (input.toUpperCase().charAt(0)) {
                case 'R':
                    result = 0
                    isValid = true
                    break;
                case 'P':
                    result = 1
                    isValid = true
                    break;
                case 'S':
                    result = 2
                    isValid = true
                    break;
            }
        }
    }
    return result
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

function playGame() {
    let humanScore = 0
    let computerScore = 0
    const RoundsToPlay = 5
    let currRounds = 0
    while (currRounds < RoundsToPlay) {
        let message = "Round " + currRounds + " : " + humanScore + " | " + computerScore + "\n Rock(R), Paper(P) or Scissors(S)?"
        switch(playRound(getHumanChoice(message), getComputerChoice()))
        {
            case 0:
                //Tie
                console.log("It was a Tie.")
                break;
            case 1:
                console.log("You win!")
                humanScore += 1
                break;
            case 2:
                console.log("You Lost...")
                computerScore += 1
                break;
        }
        currRounds += 1
    }
    console.log(humanScore, " | ", computerScore)
}

playGame()