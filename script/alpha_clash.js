// function play(){
//     const home = document.getElementById('home');
//     home.classList.add('hidden');

//     const playground = document.getElementById('playground');
//     playground.classList.remove('hidden')
// }
let isGameOn = false;
const audio = new Audio();
function handleKey(event) {
    if (isGameOn === false) return;
    const pressed = event.key;
    const currentText = document.getElementById('changeValue');
    const gotValue = currentText.innerText;

    if (pressed === gotValue) {
        const thescore = getScore('current_score');
        audio.src = "../audio/su.mp3"
        audio.play();
        const value = thescore + 1;
        getELement('current_score', value);

        // const current_score = document.getElementById('current_score');
        // const score = current_score.innerText;
        // const get_score = parseInt(score);

        // const updated_score = get_score+1;
        // current_score.innerText = updated_score;

        removeBackground(gotValue);
        playGame();
    }
    else {
        // const currentLife = document.getElementById('life_score');
        // const lifeElement = currentLife.innerText;
        // const lifeN = parseInt(lifeElement);

        const theMinus = getScore('life_score');
        const valueD = theMinus - 1;
        audio.src = "../audio/wr.mp3"
        audio.play();
        const updatedValue = (valueD / 5) * 100;

        const artBoard = document.getElementById('art-board');
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedValue}%, red)`;
        getELement('life_score', valueD);

        if (valueD === 0) {
            gameOver();
        }
    }
    if (pressed === 'Escape') {
        gameOver();
    }

}

document.addEventListener('keyup', handleKey);

function playGame() {
    const a = generateVal();
    const test = document.getElementById('changeValue');
    test.innerText = a;
    setBackground(a);

}

function play() {
    isGameOn = true;
    getELement('life_score', 5)
    getELement('current_score', 0);
    hideElement('home');
    hideElement('final_score');
    showElement('playground');
    playGame();

    isGameOn = ture;
}

function gameOver() {
    hideElement('playground')
    showElement('final_score')
    const last = getScore('current_score')
    getELement('final_game', last);
    const current_Alphabet = getElementText('changeValue');
    removeBackground(current_Alphabet);
    isGameOn = false;
    artBoard.style.background = `linear-gradient(#FFFFFFB3 100%, red)`;
}


