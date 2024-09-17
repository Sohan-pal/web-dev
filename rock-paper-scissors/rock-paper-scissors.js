//*function to generate a random coomputer move
function generateCompMove() {
  const randomNo = Math.random();
  let compMove = "";
  if (randomNo > 0 && randomNo <= 1 / 3) {
    compMove = "Rock";
  } else if (randomNo > 1 / 3 && randomNo <= 2 / 3) {
    compMove = "Paper";
  } else if (randomNo > 2 / 3 && randomNo <= 1) {
    compMove = "Scissors";
  }
  return compMove;
}
const scores = {
  wins: 0,
  losses: 0,
  ties: 0,
};

//*function to compare the user's move with the computer' move and show the required result

function compareUsermove(userMove, compMove) {
  //*userMove Rock

  if (userMove === "Rock") {
    if (compMove === "Rock") {
      document.querySelector(".result").innerHTML = `TIE`;
      scores.ties++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="rock-emoji.png" class="move-icon" alt="" />
      <img src="rock-emoji.png" class="move-icon" alt="" />
      Computer`;
    } else if (compMove === "Paper") {
      document.querySelector(".result").innerHTML = `YOU LOSE`;
      scores.losses++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="rock-emoji.png" class="move-icon" alt="" />
      <img src="paper-emoji.png" class="move-icon" alt="" />
      Computer`;
    } else if (compMove === "Scissors") {
      document.querySelector(".result").innerHTML = `YOU WIN`;
      scores.wins++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="rock-emoji.png" class="move-icon" alt="" />
      <img src="scissors-emoji.png" class="move-icon" alt="" />
      Computer`;
    }
  }

  //*userMove Paper

  if (userMove === "Paper") {
    if (compMove === "Rock") {
      document.querySelector(".result").innerHTML = `YOU WIN`;
      scores.wins++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="paper-emoji.png" class="move-icon" alt="" />
      <img src="rock-emoji.png" class="move-icon" alt="" />
      Computer`;
    } else if (compMove === "Paper") {
      document.querySelector(".result").innerHTML = `TIE`;
      scores.ties++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="paper-emoji.png" class="move-icon" alt="" />
      <img src="paper-emoji.png" class="move-icon" alt="" />
      Computer`;
    } else if (compMove === "Scissors") {
      document.querySelector(".result").innerHTML = `YOU LOSE`;
      scores.losses++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="paper-emoji.png" class="move-icon" alt="" />
      <img src="scissors-emoji.png" class="move-icon" alt="" />
      Computer`;
    }
  }

  //*usermove scissors

  if (userMove === "Scissors") {
    if (compMove === "Rock") {
      document.querySelector(".result").innerHTML = `YOU LOSE`;
      scores.losses++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="scissors-emoji.png" class="move-icon" alt="" />
      <img src="rock-emoji.png" class="move-icon" alt="" />
      Computer`;
    } else if (compMove === "Paper") {
      document.querySelector(".result").innerHTML = `YOU WIN`;
      scores.wins++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="scissors-emoji.png" class="move-icon" alt="" />
      <img src="paper-emoji.png" class="move-icon" alt="" />
      Computer`;
    } else if (compMove === "Scissors") {
      document.querySelector(".result").innerHTML = `TIE`;
      scores.ties++;
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
      document.querySelector(".moves-chosen").innerHTML = `You
      <img src="scissors-emoji.png" class="move-icon" alt="" />
      <img src="scissors-emoji.png" class="move-icon" alt="" />
      Computer`;
    }
  }
}

//*function to reset the score

function reset() {
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${scores.wins} Losses: ${scores.losses} Ties: ${scores.ties}`;
}
