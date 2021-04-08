//////////////////////////////  ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ \\\\\\\\\\\\\\\\\\\\\\\\\\
const gridContainer = document.querySelector('.main__grid')
const startButton = document.querySelector('.start__button')
const continueButton = document.querySelector('.popup__button')
const popup = document.querySelector('.popup')
const move = document.querySelector('#move');
let solved = document.querySelector('#solved');
let notSolved = document.querySelector('#not-solved');
const popupMove = document.querySelector('#popup-move')
let click = 0;
// default cards
const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]
cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.main__grid')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
  
//////////////////////////////  ФУНКЦИИ \\\\\\\\\\\\\\\\\\\\\\\\\\

// open cards
function openCards() {
  gridContainer.classList.remove('closed');
}

//close popup by continue button
function closePopupByContinueButton() {
  popup.classList.add('closed');
  window.location.reload()
}

//open popup
function openPopup() {
  popup.classList.remove('closed');
}
// click counter
function clickCounter() {
  click = click + 1;
  move.textContent = click;
  popupMove.textContent = move.textContent;
}
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/yellow.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/yellow.png')
    cards[optionTwoId].setAttribute('src', 'images/yellow.png')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/yellow.png')
    cards[optionTwoId].setAttribute('src', 'images/yellow.png')
  }
  cardsChosen = []
  cardsChosenId = []
  solved.textContent = cardsWon.length;
  notSolved.textContent = cardArray.length - cardsWon.length*2;
  if  (cardsWon.length === cardArray.length/2) {
    openPopup()
  }
}
//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}
createBoard();
//////////////////////////////  ВЫЗОВЫ ФУНКЦИИ \\\\\\\\\\\\\\\\\\\\\\\\\\
// open cards
startButton.addEventListener('click', openCards);
// close popup by continue button
continueButton.addEventListener('click', closePopupByContinueButton);
// click counter
gridContainer.addEventListener('click', clickCounter)