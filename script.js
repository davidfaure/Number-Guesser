let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
if (Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber)){
  return true;
} if (Math.abs(humanGuess - targetNumber) > Math.abs(computerGuess - targetNumber)){
  return false;
}
}

const updateScore = winner =>{
  if (winner === 'human') {
    humanScore += 1;
  }else if (winner === 'computer') {
    computerScore +=1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
