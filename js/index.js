const handOptions = {
  "rock": "/assets/Rock.png",
  "paper": "/assets/Paper.png",
  "scissors": "/assets/Scissors.png"
};

let USER_SCORE = 0;
let COMPUTER_SCORE = 0;


const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];
  
  // set computer image 
  document.getElementById("computerPickImage").src = handOptions[cpHand]
  
  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setScore(USER_SCORE, COMPUTER_SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("HURRAY..! YOU WIN!🏆");
    setScore(USER_SCORE + 1, COMPUTER_SCORE);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("HURRAY..! YOU WIN!🏆");
    setScore(USER_SCORE + 1, COMPUTER_SCORE);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScore(USER_SCORE, COMPUTER_SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScore(USER_SCORE, COMPUTER_SCORE + 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("HURRAY..! YOU WIN!🏆");
    setScore(USER_SCORE + 1, COMPUTER_SCORE);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (userScore, computerScore) => {
  USER_SCORE = userScore;
  COMPUTER_SCORE = computerScore;
  document.querySelector("#userScore").innerText = userScore;
  document.querySelector("#computerScore").innerText = computerScore;
}

// JavaScript in your existing index.js or in a separate JS file
const rulesPopup = document.getElementById("rulesPopup");

function openRulesPopup() {
  rulesPopup.style.display = "block";
}

function closeRulesPopup() {
  rulesPopup.style.display = "none";
}


