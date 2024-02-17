const alternativesList = document.querySelectorAll(".alternatives-list-item");
const btnConfirmAnswer = document.querySelectorAll(".btn-confirm-answer");
const alternativeResult = document.querySelector(".alternative-result");
const btnNextCard = document.querySelectorAll(".btn-next-card");
let progressCounter = 1;

alternativesList.forEach((e) => {
    e.addEventListener('click', () => {
        for (let i = 0; i < alternativesList.length; i++) {
            alternativesList[i].classList.remove('alternatives-list-item__selected');
        }

        e.classList.add('alternatives-list-item__selected');
    })
});

btnConfirmAnswer.forEach((e) => {
    e.addEventListener('click', () => {
        checkAnswer(e);
    });
})

function checkAnswer(e) {
    let fatherElement = e.closest(".screen-card");
    let alternatives = fatherElement.querySelectorAll(".alternatives-list-item");
    let alternativeSelected = fatherElement.querySelector(".alternatives-list-item__selected");
    let correctAnswerResult = fatherElement.querySelector(".correct-alternative-result");
    let wrongAnswerResult = fatherElement.querySelector(".wrong-alternative-result");

    if (alternativeSelected.classList.contains("correct-alternative")) {
        correctAnswerResult.style.display = "flex";
        for(let i = 0; i < alternatives.length; i++) {
            alternatives[i].style.pointerEvents = "none";
        }
    } else {
        wrongAnswerResult.style.display = "flex";
        for(let i = 0; i < alternatives.length; i++) {
            alternatives[i].style.pointerEvents = "none";
        }
    }
};

btnNextCard.forEach((e) => {
    e.addEventListener('click', () => {
        swapCard(e);
    })
})

function swapCard(e) {
    currentCard = e.closest(".screen-card");

    currentCard.style.left = "-100%";
}