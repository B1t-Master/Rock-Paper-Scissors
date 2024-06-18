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
let totalComputerScore, totalPlayerScore, playerScore, computerScore;
/*let rounds = prompt("How many rounds do you want to play?",);
parseInt(rounds);
*/

/*function gethumanChoice(choice) {
   alert("Choose your choice");
   return choice = btn.id;

}*/

function getComputerChoice(choice) {
   return choice = Math.round((Math.random() * 2));
}

playerScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
   let decision
   if ((humanChoice === "rock") && computerChoice === 0)
      decision = "You both picked rock - Draw ";
   else if ((humanChoice === "rock") && computerChoice === 1) {
      decision = "You picked rock computer picked paper - Computer takes the round"
      computerScore++
   }
   else if ((humanChoice === "rock") && computerChoice === 2) {
      decision = "You picked rock computer picked paper - Player takes the round"
      playerScore++
   }
   else if ((humanChoice === "paper") && computerChoice === 0) {
      decision = "You picked paper , computer picked rock-Player takes the round"
      playerScore++
   }
   else if ((humanChoice === "paper") && computerChoice === 1) {
      decision = "You both picked paper - Draw";
   }
   else if ((humanChoice === "paper") && computerChoice === 2) {
      decision = "You picked paper , computer picked scissors - Computer takes the round"
      computerScore++
   }
   else if ((humanChoice === "scissors") && computerChoice === 0) {
      decision = "You picked scissors , computer picked rock - Computer takes the round"
      computerScore++
   }
   else if ((humanChoice === "scissors") && computerChoice === 1) {
      decision = "You picked scissors , computer picked paper - Player takes the round"
      playerScore++
   }
   else {
      decision = "You both picked scissors - Draw"
   }

   totalComputerScore = computerScore;
   totalPlayerScore = playerScore;
   console.log(decision);

   if (computerScore > playerScore)
      console.log("Computer wins")
   else if (playerScore > computerScore)
      console.log("Player wins")
   else
      console.log("No one wins,It's a tie")
   matchResults.textContent = decision;
   results.appendChild(matchResults);
   displayComputerScore.textContent = totalComputerScore;
   displayPlayerScore.textContent = totalPlayerScore;
   results.appendChild(displayPlayerScore);
   results.appendChild(displayComputerScore);

}

btn = document.querySelectorAll("button");
let matchResults = document.createElement('div')
results = document.querySelector('div');
let score = document.createElement('div');
let displayPlayerScore = document.createElement('div');
let displayComputerScore = document.createElement('div');



btn.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      computerChoice = getComputerChoice();
      humanChoice = btn.id;
      playRound(humanChoice, computerChoice);
      if (computerScore === 5 || playerScore === 5) {
         if (totalComputerScore > totalPlayerScore)
            alert(`Computer 👾 
         wins the league 🏆`);
         else if (totalPlayerScore > totalComputerScore)
            alert(`Player 🧑‍💻 
         wins the league 🏆`);
         else
            alert(`See ya next season.. 
         for the rematch`);

         computerScore = 0;
         playerScore = 0;
         e.preventDefault();
      }
   });
});



