// display

const displayMinuts = document.getElementById("minuts");
const displaySecunds = document.getElementById("seconds");
const displayMiliSecunds = document.getElementById("miliseconds");
const listRound = document.getElementById("list");

//controls

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

const roundButton = document.getElementById("round");

//roundButton.classlist = "off";

let mili = 0;
let minuts = 0;
let secunds = 0;

let timer;

function startTimer() {
  timer = setInterval(() => {
    if (mili === 99) {
      mili = 0;
      secunds++;
    }
    if (secunds === 59) {
      secunds = 0;
      minuts++;
    }

    mili += 1;
    displayMinuts.textContent = minuts;
    displaySecunds.textContent = secunds;
    displayMiliSecunds.textContent = mili;
  }, 10);
}

startButton.addEventListener("click", () => {
  startTimer();
  //   roundButton.style.display = "inline";
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
  //   roundButton.style.display = "none";
});

resetButton.addEventListener("click", () => {
  minuts = 0;
  secunds = 0;
  mili = 0;

  displayMinuts.textContent = minuts;
  displaySecunds.textContent = secunds;
  displayMiliSecunds.textContent = mili;

  listRound.innerHTML = "";
});

roundButton.addEventListener("click", () => {
  if (!minuts && !secunds && !mili) {
    return;
  }

  listRound.innerHTML += `<li> = ${minuts} : ${secunds} : ${mili}</li>`;
});
