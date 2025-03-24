document.addEventListener("DOMContentLoaded", () => {

  let secretNumber = Math.floor(Math.random()*100+1);
  let attempts = 0;
  const getResult = document.getElementById('result');
  const userGuess = document.getElementById('guessInput');
  const submitButton = document.getElementById('submitButton');
  const resetButton = document.getElementById('resetButton');

  submitButton.addEventListener('click', checkGuess);
  resetButton.addEventListener('click', resetGame);

  function checkGuess(){
    
    try{

      const guess = parseInt(guessInput.value);
      attempts++;
      if(secretNumber===guess){
        getResult.textContent = `Right attempts ${attempts}`;

      }else if(secretNumber>guess){
        getResult.textContent = `Failed : Up`

      }else{
        getResult.textContent = `Failed : Down`

      }
    resetGame();
    }catch(e)
{
  console.log(e.message);
}  }
  function resetGame(){
    
  }


});