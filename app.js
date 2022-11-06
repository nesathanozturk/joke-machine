// ELEMENTS
const jokeQuestion = document.getElementById("joke_question");
const jokeAnswer = document.getElementById("joke_answer");
const generateBtn = document.getElementById("generateBtn");

// FUNCTIONS:
generateBtn.addEventListener("click", generateJoke);
generateJoke();

function generateJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
        jokeQuestion.innerHTML = data.setup;
        jokeAnswer.innerHTML = data.punchline;
    });
};