document.addEventListener('DOMContentLoaded', () => {
  //&HTML요소 선택
  const cardContainer = document.getElementById('card-container');
  //: 카드컨테이너 요소의 자식요소로 동적으로 생성되는 카드들을 전달한다
  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const completedButton = document.getElementById('completed-button');

  //&색상 배열 정의 (6개)
  const colors = ['black', 'red', 'yellow', 'pink', 'orange', 'blue'];

  //&colors 배열의 색상을 복제하여 cardColors 생성한다
  let cardColors = [...colors, ...colors];

  function initializeGame(){
    //&shuffle()을 사용해서 섞는 함수를 만든다
    shuffle(cardColors);
    cardContainer.innerHTML = '';
    //12개의 카드를 for 반복문으로 생성하여 HTML요소로 할당한다.
    for(let i = 0; i < 12; i++) {
      cardContainer.innerHTML += `
      <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="hi.jpg" alt="카드앞면"/>
            </div>
            <div class="class-back" style = "background-color: ${cardColors[i]};"></div>
          </div>
        </div>
      `;
    }
    addCardEventListener();
  }

  
  function revealCardsTemporary() {
    completedButton.disabled = true;
    //&모든 카드 뒤집기기
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.add('flipped');
      });
    },100);

    //&시작 시 모든 카드의 뒷면 색상을 보여주는 함수
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
      });
      completedButton.disabled = false;
    },2000);
  }
  function addCardEventListener(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click',flipCard);
    });
  }

  //&변수선언
  let hasFlippedCard = false;
  let firstCard,secondCard;
  let lockBoard = false;
  let isGameStarted = false;
  
  //&카드를 뒤집는 함수 정의
  function flipCard(){
    if(!isGameStarted || lockBoard) return;
    this.classList.add('flipped');
    if(!hasFlippedCard){
      hasFlippedCard = true;
      firstCard = this;
    }else{
      hasFlippedCard = false;
      secondCard = this;
      //&두 카드가 일치하는지 여부를 확인하는 함수(아래에서 정의)
      checkForMatch();
    }
  }
});

//&shuffle 함수
function shuffle(array){
  let length = array.length;
  for(let i = length-1; i > 0; i--) {
    let j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
}

//&카드일치 여부 확인함수
function checkForMatch(){
  let isMatch = firstCard.querySelector('.card-back').style.backgroundColor === secondCard.querySelector('.card-back').style.backgroundColor;

  isMatch ? disabledCards() : unflipCards();

}

function disabledCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards(){
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  },1000);

}

//&게임판 초기화 함수 정의
function resetBoard(){
  [hasFlippedCard,lockBoard] = [false, false];
  [firstCard,secondCard] = [null,null];

}

//&게임 시작 시간을 기록할 변수선언
let gameStartTime;
startButton.addCardEventListener('click', () => {
  initializeGame();
  gameStartTime = new Date();

  //&시작, 재시작, 완료 버튼의 배치를 구현
  toggleButtonVisiablity(true);
  revealCardsTemporary();
  isGameStarted = true;
});

resetButton.addCardEventListener('click', () => {
  initializeGame();
  gameStartTime = new Date();

  //&시작, 재시작, 완료 버튼의 배치를 구현
  toggleButtonVisiablity(true);
  revealCardsTemporary();
  isGameStarted = true;
});

//&모든 카드가 뒤집혀 있는지 확인하기기
completedButton.addCardEventListener('click', () => {
  const allFliped = Array.from(document.querySelectorAll('.card')).every(
    card => card.classList.contains('flipped')
  );
  if(allFliped){
    const gameTime = 
    alert(`Time : ${Math.floor(gameTime/1000)}초`);
    isGameStarted = false;
    initializeGame();
    toggleButtonVisiablity(false);

  }else{
    alert('not complete');

  }
});

function toggleButtonVisiablity(isGameStarted){
  startButton.style.display = isGameStarted? 'none' : 'block';
  resetButton.style.display = isGameStarted? 'block' : 'none';
  completedButton.style.display = isGameStarted? 'block' : 'none';

}
toggleButtonVisiablity(false);
initializeGame();