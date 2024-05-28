/* Pseudocode
   Ask the user for the number of rounds they want to play
   Insert the number of rounds the user wants to play and loop first get the logic for 1 round do this later
   Randomly generate the computers choice(using numbers(1-rock, 2-paper , 3-scissors))
   Input the users choice (Rock, Paper or Scissors)
   if computer chooses 1 and user chooses rock display tie  
   if computer chooses 1 and user chooses paper display player wins ,increment palyer score by 1 
   if computer chooses 1 and user chooses scissors display computer wins , increment computer score by 1
   if computer chooses 2 and user chooses paper display tie
   if computer chooses 2 and user chooses rock display computer wins , computer score +1
   if computer chooses 2 and user chooses scissors display player wins , player score +1
   if computer chooses 3 and user chooses scissors display tie
   if computer chooses 3 and user chooses rock display player wins , player score +1
   if computer chooses 3 and user chooses paper display computer wins , computer score +1
   Compare the scores at the end and display win lose or tie
   */
let humanChoice;
let computerChoice;
let rounds = prompt("How many rounds do you want to play?",);
parseInt(rounds);


function getHumanChoice(choice) {
   return choice = prompt("Enter your choice Rock🪨 Paper📄 or Scissors✂️",);

}

function getComputerChoice(choice) {
   return choice = Math.round((Math.random() * 2));
}

function playRound(humanChoice, computerChoice) {
   let decision
   let playerScore = 0;
   let computerScore = 0;
   if ((humanChoice === "Rock" || humanChoice === "rock") && computerChoice === 0)
      decision = "You both picked rock - Draw ";
   else if ((humanChoice === "Rock" || humanChoice === "rock") && computerChoice === 1) {
      decision = "You picked rock computer picked paper - Computer takes the round"
      computerScore++
   }
   else if ((humanChoice === "Rock" || humanChoice === "rock") && computerChoice === 2) {
      decision = "You picked rock computer picked paper - Player takes the round"
      playerScore++
   }
   else if ((humanChoice === "paper" || humanChoice === "Paper") && computerChoice === 0) {
      decision = "You picked paper , computer picked rock-Player takes the round"
      playerScore++
   }
   else if ((humanChoice === "paper" || humanChoice === "Paper") && computerChoice === 1) {
      decision = "You both picked paper - Draw";
   }
   else if ((humanChoice === "paper" || humanChoice === "Paper") && computerChoice === 2) {
      decision = "You picked paper , computer picked scissors - Computer takes the round"
      computerScore++
   }
   else if ((humanChoice === "Scissors" || humanChoice === "scissors") && computerChoice === 0) {
      decision = "You picked scissors , computer picked rock - Computer takes the round"
      computerScore++
   }
   else if ((humanChoice === "Scissors" || humanChoice === "scissors") && computerChoice === 1) {
      decision = "You picked scissors , computer picked paper - PLayer takes the round"
      playerScore++
   }
   else {
      decision = "You both picked scissors - Draw"
   }
   console.log(decision);

   if (computerScore > playerScore)
      console.log("Computer wins")
   else if (playerScore > computerScore)
      console.log("Player wins")
   else
      console.log("No one wins,It's a tie")
}

function playGame() {
   computerChoice = getComputerChoice();
   humanChoice = getHumanChoice()
   playRound(humanChoice, computerChoice);
}

for (i = 1; i <= rounds; i++) {
   playGame()
}





