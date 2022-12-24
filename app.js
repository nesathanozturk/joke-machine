// ELEMENTS:
const jokeQuestion = document.getElementById("joke_question");
const jokeAnswer = document.getElementById("joke_answer");
const generateBtn = document.getElementById("generateBtn");

// API
const BASE_URL = "https://official-joke-api.appspot.com/random_joke";

// FUNCTION:
generateJoke();

generateBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  jokeQuestion.innerHTML = data.setup;
  jokeAnswer.innerHTML = data.punchline;
};
