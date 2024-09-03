setInterval(setClock, 1000);

const handhour = document.querySelector('[data-hand-hour]');
const handminute = document.querySelector('[data-hand-minute]');
const handsecond = document.querySelector('[data-hand-second]');



function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(handhour, hourRatio);
    setRotation(handminute, minuteRatio);
    setRotation(handsecond, secondRatio);

}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotatation', rotationRatio * 360);
}

setClock();





// //----------------------------------------------------TIC TAC TOE GAME-----------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', (event) => {
//     const gameSquares = [
//         document.querySelector('.square-1'),
//         document.querySelector('.square-2'),
//         document.querySelector('.square-3'),
//         document.querySelector('.square-4'),
//         document.querySelector('.square-5'),
//         document.querySelector('.square-6'),
//         document.querySelector('.square-7'),
//         document.querySelector('.square-8'),
//         document.querySelector('.square-9'),
//     ];

//     let turn = 0;  // 0 for X's turn, 1 for O's turn

//     const squares = document.querySelectorAll('div[class*="square"]');

//     squares.forEach(square => {
//         square.addEventListener('click', (e) => {
//             handleClick(e);
//             checkWinner();
//         });
//     });

//     function handleClick(e) {
//         if (turn == 0) {
//             e.target.style.backgroundImage = 'url("Tc-X-min.webp")';
//             e.target.style.backgroundSize = 'contain';
//             e.target.style.backgroundRepeat = 'no-repeat';
//             e.target.removeEventListener('click', handleClick);
//             turn = 1;
//         } else {
//             e.target.style.backgroundImage = 'url("Tc-O-min.webp")';
//             e.target.style.backgroundSize = 'contain';
//             e.target.style.backgroundRepeat = 'no-repeat';
//             e.target.removeEventListener('click', handleClick);
//             turn = 0;
//         }
//     }

//     const result = document.querySelector('.result');
//     const gameResult = document.querySelector('.gameResult');
//     function checkWinner() {
//         if (gameSquares[0].style.backgroundImage === 'url("Tc-O-min.webp")' && gameSquares[1].style.backgroundImage === 'url("Tc-O-min.webp")' && gameSquares[2].style.backgroundImage === 'url("Tc-O-min.webp")') {
//             result.style.display = 'block'
//             gameResult.innerText = 'O is the Winneeeeeer'
//         } else if (gameSquares[3].style.backgroundImage === 'url("Tc-O-min.webp")' && gameSquares[4].style.backgroundImage === 'url("Tc-O-min.webp")' && gameSquares[5].style.backgroundImage === 'url("Tc-O-min.webp")') {
//             result.style.display = 'block'
//             gameResult.innerText = 'O is the Winneeeeeer'
//         } else if (gameSquares[6].style.backgroundImage === 'url("Tc-O-min.webp")' && gameSquares[7].style.backgroundImage === 'url("Tc-O-min.webp")' && gameSquares[8].style.backgroundImage === 'url("Tc-O-min.webp")') {
//             result.style.display = 'block'
//             gameResult.innerText = 'O is the Winneeeeeer'
//         } else if (gameSquares[0].style.backgroundImage === 'url("Tc-X-min.webp")' && gameSquares[1].style.backgroundImage === 'url("Tc-X-min.webp")' && gameSquares[2].style.backgroundImage === 'url("Tc-X-min.webp")') {
//             result.style.display = 'block'
//             gameResult.innerText = 'X is the Winneeeeeer'
//         } else if (gameSquares[3].style.backgroundImage === 'url("Tc-X-min.webp")' && gameSquares[4].style.backgroundImage === 'url("Tc-X-min.webp")' && gameSquares[5].style.backgroundImage === 'url("Tc-X-min.webp")') {
//             result.style.display = 'block'
//             gameResult.innerText = 'X is the Winneeeeeer'
//         } else if (gameSquares[6].style.backgroundImage === 'url("Tc-X-min.webp")' && gameSquares[7].style.backgroundImage === 'url("Tc-X-min.webp")' && gameSquares[8].style.backgroundImage === 'url("Tc-X-min.webp")') {
//             result.style.display = 'block'
//             gameResult.innerText = 'X is the Winneeeeeer'
//         }
//         // {
//         //     result.style.display = 'block'
//         //     result.innerHTML = 'NO ONE WIN'
//         // }

//     }


//     const close = document.querySelector('.close');

//     close.addEventListener('click', () => {
//         result.style.display = 'none'
//         turn = 0;
//         squares.forEach(square => {
//             square.addEventListener('click', (e) => {
//                 square.style.backgroundImage = '';
//                 square.addEventListener('click', handleClick);
//             });
//         });
//     });

// });



/*last version of X O Game code */

document.addEventListener('DOMContentLoaded', (event) => {
    const gameSquares = [
        document.querySelector('.square-1'),
        document.querySelector('.square-2'),
        document.querySelector('.square-3'),
        document.querySelector('.square-4'),
        document.querySelector('.square-5'),
        document.querySelector('.square-6'),
        document.querySelector('.square-7'),
        document.querySelector('.square-8'),
        document.querySelector('.square-9'),
    ];

    let turn = 0;  // 0 for X's turn, 1 for O's turn

    const squares = document.querySelectorAll('div[class*="square"]');

    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            handleClick(e);
            checkWinner();
        });
    });

    function handleClick(e) {
        if (turn == 0) {
            e.target.style.backgroundImage = 'url("Tc-X-min.webp")';
            e.target.style.backgroundSize = 'contain';
            e.target.style.backgroundRepeat = 'no-repeat';
            e.target.removeEventListener('click', handleClick);
            turn = 1;
        } else {
            e.target.style.backgroundImage = 'url("Tc-O-min.webp")';
            e.target.style.backgroundSize = 'contain';
            e.target.style.backgroundRepeat = 'no-repeat';
            e.target.removeEventListener('click', handleClick);
            turn = 0;
        }
    }

    const result = document.querySelector('.result');

    function checkWinner() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (gameSquares[a].style.backgroundImage &&
                gameSquares[a].style.backgroundImage === gameSquares[b].style.backgroundImage &&
                gameSquares[a].style.backgroundImage === gameSquares[c].style.backgroundImage) {

                result.style.display = 'block';
                const winner = gameSquares[a].style.backgroundImage.includes("Tc-X-min.webp") ? 'X' : 'O';
                result.innerHTML = `<button class="close"><i class="fa-solid fa-x"></i></button>${winner} is the Winner!`;
                addCloseEventListener();
                return;
            }
        }

        const isDraw = [...gameSquares].every(square => square.style.backgroundImage);
        if (isDraw) {
            result.style.display = 'block';
            result.innerHTML = `<button class="close"><i class="fa-solid fa-x"></i></button>It's a Draw!`;
            addCloseEventListener();
        }
    }

    function addCloseEventListener() {
        const close = document.querySelector('.close');
        close.addEventListener('click', () => {
            result.style.display = 'none';
            resetGame();
        });
    }

    function resetGame() {
        turn = 0;
        gameSquares.forEach(square => {
            square.style.backgroundImage = '';
            square.addEventListener('click', handleClick);
        });
    }

    addCloseEventListener();
});
