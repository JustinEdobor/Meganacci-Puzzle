const cards = 
    document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id: 1,
        image: 
'./img/char01.jpg',
    },
    {
        id: 2,
        image: 
'./img/char02.jpg',
    },
    {
        id: 3,
        image: 
'./img/char03.jpg',
    },
    {
        id: 4,
        image: 
'./img/char04.jpg',
    },
    {
        id: 5,
        image: 
'./img/char05.jpg',
    },
    {
        id: 6,
        image: 
'./img/char03.jpg',
    },
    {
        id: 7,
        image: 
'./img/char05.jpg',
    },
    {
        id: 8,
        image: 
'./img/char02.jpg',
    },
    {
        id: 9,
        image: 
'./img/char06.jpg',
    },
    {
        id: 10,
        image: 
'./img/char01.jpg',
    },
    {
        id: 11,
        image: 
'./img/char06.jpg',
    },
    {
        id: 12,
        image: 
'./img/char04.jpg',
    }
]

// function to restart the game
const restartGame = () => {
    let toggledCard = 
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount=0;
    movesDisplay.innerText = `Flips: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    }) 
}
restart.addEventListener('click', restartGame);

//checking for the last clicked and current 
//clicked cards and applying changes accordingly
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.card-image').src;
        let previousImgSrc = 
        toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
        if(thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
        }
        else{
            toggledCardsArray.length = 0;
            move++;
            winCount++;
        }
        movesDisplay.innerText = `Flips: ${move}`;
        if (winCount === 6) {
    setTimeout(() => {
        const playAgain = confirm(`Congratulations!!! You won the game in ${move} flips.\nDo you want to play again?`);
        if (playAgain) {
            restartGame(); // restart the game
        } else {
            window.location.href = 'index.html'; // homepage URL
        }
    }, 300);
}
    })
}