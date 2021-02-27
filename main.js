// HTML Selectors

const statusDiv = document.querySelector(".status");
const restartBtn = document.querySelector(".restartBtn");
const fieldDivs = document.querySelectorAll(".field");

// game variables
let gameisLive = true;
let xIsNext = true;
let winner = null;

// event Handlers
const handleRestart = (e) => {
  xIsNext = true;
  statusDiv.innerHTML = "Player X's turn";
  winner = null;
  for (const fieldDiv of fieldDivs) {
    fieldDiv.classList.remove("x");
    fieldDiv.classList.remove("o");
  }
};

const gameController = () => {
  const t1 = fieldDivs[0].classList[2];
  const t2 = fieldDivs[1].classList[2];
  const t3 = fieldDivs[2].classList[2];
  const m1 = fieldDivs[3].classList[2];
  const m2 = fieldDivs[4].classList[2];
  const m3 = fieldDivs[5].classList[2];
  const b1 = fieldDivs[6].classList[2];
  const b2 = fieldDivs[7].classList[2];
  const b3 = fieldDivs[8].classList[2];

  const handleWin = (letter) => {
    gameisLive = false;
    winner = letter;
    if (winner === "x") {
      statusDiv.innerHTML = "Player X has won!";
    } else {
      statusDiv.innerHTML = "Player O has won!";
    }
  };

  // check winner
  if (t1 && t1 === t2 && t1 === t3) {
    handleWin(t1);
  } else if (m1 && m1 === m2 && m1 === m3) {
    handleWin(m1);
  } else if (b1 && b1 === b2 && b1 === b3) {
    handleWin(b1);
  } else if (t1 && t1 === m1 && t1 === b1) {
    handleWin(t1);
  } else if (t2 && t2 === m2 && t2 === b2) {
    handleWin(t2);
  } else if (t2 && t2 === m2 && t2 === b2) {
    handleWin(t2);
  } else if (t1 && t1 === m2 && t1 === b3) {
    handleWin(t1);
  } else if (t3 && t3 === m2 && t3 === b1) {
    handleWin(t3);
  } else if (t1 && t2 && t3 && m1 && m2 && m3 && b1 && b2 && b3) {
    gameisLive = false;
    statusDiv.innerHTML = "Game is tied!";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = "Player X's turn!";
    } else {
      statusDiv.innerHTML = "Player O's turn!";
    }
  }
};

// field click handler
const handleFieldClick = (e) => {
  const classList = e.target.classList;
  const location = classList[1];

  if (classList[2] === "x" || classList[2] === "o") {
    return;
  }

  if (xIsNext) {
    classList.add("x");
    gameController();
  } else {
    classList.add("o");
    gameController();
  }
};

// event listeners
restartBtn.addEventListener("click", handleRestart);

for (const fieldDiv of fieldDivs) {
  fieldDiv.addEventListener("click", handleFieldClick);
}
