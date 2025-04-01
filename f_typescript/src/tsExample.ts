{
  let count: number = 0;
  function updateDisplay(){
    const countElement = document.getElementById('countValue');
    if(countElement){
      countElement.textContent = count.toString();

    }

  }

  function increment(){
    count++;
    updateDisplay();

  }

  function decrement(){
    count--;
    updateDisplay();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    if(incrementButton) incrementButton.addEventListener('click', increment);
    if(decrementButton) decrementButton.addEventListener('click', decrement);
  });

}