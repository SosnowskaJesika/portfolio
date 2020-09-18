document.addEventListener('DOMContentLoaded', function () {

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        };
    };

    function gameEnded(startTime) {
        const endTime = new Date();
        let gameTime = endTime.getTime() - startTime.getTime();
        alert(`Wygrałeś!!! Twoja gra trwała: ${gameTime/1000} sekund`);
    }

    const setHideCardsTimer = () => setTimeout(hideAllCards, 1600)

    const colors = ['red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'pink', 'red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'pink'];
    const arrayGameBlocks = [...document.querySelectorAll('.game-board__block')];
    let visibleCards = [];
    const gameEnd = colors.length / 2;
    let guessedPairs = 1;
    const startTime = new Date();
    const reloadBtn = document.querySelector('.memory-game__btn');

    shuffleArray(colors);

    for (let i = 0; i < 16; i++) {
        arrayGameBlocks[i].classList.add(colors[i]);
    };

    const hideAllCards = () => {
        arrayGameBlocks.forEach(card => card.classList.add('hidden'));
        visibleCards = [];
    };

    setHideCardsTimer();

    let timeoutId = null;
    const checkCards = function () {

        let card = this;
        if (visibleCards.length === 0) {
            timeoutId = setHideCardsTimer();
        }

        if (visibleCards.length >= 2 || card === visibleCards[0]) {
            return;
        }

        card.classList.toggle('hidden');
        visibleCards.push(card);

        if (visibleCards.length >= 2 && visibleCards[0].className === visibleCards[1].className) {

            clearTimeout(timeoutId);
            timeoutId = null;

            setTimeout(() => {
                visibleCards.forEach(({
                    classList
                }) => classList.add('off'))
                hideAllCards();
                guessedPairs++;
            }, 500);

            if (gameEnd === guessedPairs) {
                gameEnded(startTime);
            }
        }
    }

    arrayGameBlocks.forEach(block => block.addEventListener('click', checkCards));

    reloadBtn.addEventListener('click', function () {
        window.location.reload();
    })
});