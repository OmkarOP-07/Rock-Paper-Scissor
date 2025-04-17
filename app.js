let userScore = 0;
let compScore = 0;
let userOP = document.querySelector("#my-score");
let compOP = document.querySelector("#comp-score");
let optext = document.querySelector(".scoreOP");
let rstbtn = document.querySelector("#rstbtn")
let username = prompt("Enter your name");
let user = document.querySelector("#username");

user.innerText = username;
optext.style.visibility = "hidden";

const choices = document.querySelectorAll(".choice");

let compChoice = () => {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};
let display = (opstring) => {
  optext.style.visibility = "visible";
  optext.innerText = opstring;

  setTimeout(() => {
    optext.style.visibility = "hidden";
  }, 2000);
};

let playGame = (userChoice) => {
  if (userChoice == "rock") {
    if (compChoice() == "rock") {
      display("Tied");
    } else if (compChoice == "scissors") {
      display("User Win");
      userScore++;
    } else {
      display("Comp win");
      compScore++;
    }
  }
  if (userChoice == "paper") {
    if (compChoice() == "rock") {
      display("User Win");
      userScore++;
    } else if (compChoice == "scissors") {
      display("Comp Win");
      compScore++;
    } else {
      display("Tied");
    }
  }
  if (userChoice == "scissors") {
    if (compChoice() == "rock") {
      display("Comp win");
      compScore++;
    } else if (compChoice == "scissors") {
      display("Tied");
    } else {
      display("User Win");
      userScore++;
    }
  }
  console.log("user Score = ", userScore);
  console.log("comp Score = ", compScore);
  userOP.innerText = userScore;
  compOP.innerText = compScore;
};

choices.forEach((choice) => {
  let id = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    // console.log("User Choice = ",id)
    // console.log("Comp Choice = ",playGame())
    playGame(id);
  });
});

rstbtn.addEventListener("click", ()=> {
    userScore = 0;
    compScore = 0;
    playGame()
})