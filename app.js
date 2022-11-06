// ELEMENTS:
const jokeQuestion = document.getElementById("joke_question");
const jokeAnswer = document.getElementById("joke_answer");
const generateBtn = document.getElementById("generateBtn");

// FUNCTION:
generateJoke();

generateBtn.addEventListener("click", generateJoke);
async function generateJoke() {
    const JOKE_API = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jokes = await JOKE_API.json();
    jokeQuestion.innerHTML = jokes.setup;
    jokeAnswer.innerHTML = jokes.punchline;
};