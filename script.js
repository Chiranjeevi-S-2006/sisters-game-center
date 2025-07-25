function playPuzzle() {
  const num1 = Math.floor(Math.random() * 20); // larger range
  const num2 = Math.floor(Math.random() * 20);
  const isAddition = Math.random() < 0.5; // randomly decide between + or -

  let question, correctAnswer;

  if (isAddition) {
    question = `What is ${num1} + ${num2}?`;
    correctAnswer = num1 + num2;
  } else {
    question = `What is ${num1} - ${num2}?`;
    correctAnswer = num1 - num2;
  }

  const answer = prompt(question);
  const resultText = (parseInt(answer) === correctAnswer)
    ? "🎉 Good job girls!"
    : `❌ Oops! The right answer was ${correctAnswer}`;

  document.getElementById('puzzle-output').textContent = resultText;
}





const animals = ["lion", "tiger", "zebra", "elephant", "giraffe", "monkey", "rabbit", "kangaroo", "panda", "leopard",
"bear", "rhino", "fox", "wolf", "deer", "camel", "koala", "otter", "cheetah", "hyena",
"hippo", "buffalo", "squirrel", "donkey", "goat", "cow", "horse", "peacock", "duck", "owl"
,"ridhu","shravya"];
let currentAnimal = "";

function shuffle(word) {
  return word.split('').sort(() => 0.5 - Math.random()).join('');
}

function showScrambledAnimal() {
  currentAnimal = animals[Math.floor(Math.random() * animals.length)];
  document.getElementById("scrambled-word").textContent = shuffle(currentAnimal);
}

function checkAnimal() {
  const answer = document.getElementById("user-answer").value.toLowerCase();
  const result = document.getElementById("result");
  if (answer === currentAnimal) {
    result.textContent = "🎉 You got it!";
  } else {
    result.textContent = `❌ Oops! It was "${currentAnimal}". Try again!`;
  }
  showScrambledAnimal();
  document.getElementById("user-answer").value = "";
}

window.onload = showScrambledAnimal;



