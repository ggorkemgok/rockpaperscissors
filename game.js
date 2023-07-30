let weapons = ["rock", "paper", "scissors"];

function randomNumberGenerator() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

function computerPlays() {
  let computerMove = weapons[randomNumberGenerator()];
  $("#computerWeapon").attr("src", "images/" + computerMove + ".png");
  return computerMove;
}


$(".btn").on("click", function () {
  roundCounter++;
  $("#roundCounter").html("Round " + roundCounter);
  computerPlays();
  let computerMove = computerPlays();
  $("#playerWeapon").attr("src", "images/" + $(this).attr("id") + ".png");
  let playerMove = $(this).attr("id");
  if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "rock")
  ) {
    playerScore++;
    $("#result").html("You win!");
    $("#playerScore").html("Your score is " + playerScore);
  } else if (
    (computerMove === "rock" && playerMove === "scissors") ||
    (computerMove === "scissors" && playerMove === "paper") ||
    (computerMove === "paper" && playerMove === "rock")
  ) {
    computerScore++;
    $("#result").html("You lose!");
    $("#computerScore").html("Computer's score is " + computerScore);
  } else {
    $("#result").html("It's a tie!");
  }
});

let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;
