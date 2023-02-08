const revealJokeButton = document.querySelector("#reveal-joke");
const jokeParagraph = document.querySelector("#joke");

revealJokeButton.addEventListener("click", function() {
  jokeParagraph.textContent = "Why did the tutor stay up all night? To pass all the subjects in one night!";
});
