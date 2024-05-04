let userQuestion = document.querySelector(".userQuestion");

let questionAsked = document.createElement("div");
questionAsked.setAttribute("class", "questionAsked");

const startGame = () => {
  changeClassesStart();
  let userInput = prompt("Type any Yes Or No Question");
  console.log(`UserQuestion is:${userInput}`);

  questionAsked.innerHTML = userInput;
  userQuestion.append(questionAsked);

  chooseAnswer();
};

const changeClassesDuring = () => {
  document.getElementById("firstImage").classList.remove("eightBall1");
  document.getElementById("secondImage").classList.remove("hiddenEightBall");
  document.getElementById("firstAnswer").classList.remove("hiddenAnswer");
  document.getElementById("firstImage").classList.add("eightBallShake");
  document.getElementById("secondImage").classList.add("eightBall2");
  document.getElementById("firstAnswer").classList.add("theAnswer");
};
