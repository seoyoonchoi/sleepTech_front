let array = [1,2,3,4,5];

function sumArray(array){
  let sum = 0;
  let length = array.length;
  for(let i = 0; i<length; i++){
    sum +=array[i];
  }
  return sum;
}

console.log(sumArray(array));

//!특정 수 이상의 요소를 필터링

function filterTen(array){
  let filteredValue = [];
  let length = array.length;
  for(let i = 0; i<length; i++){
    if(array[i]>=10){
      filteredValue.push(array[i]);
    }
  }
  return filteredValue;
}

console.log(filterTen([3,43,5,2,5,56]));

function AverageArray(array){
  let sum = 0;
  let length = array.length;
  for(let i = 0; i<length; i++){
    sum +=array[i];
  }
  return sum/length;
}
console.log(AverageArray(array));

function findMax(array){
  let max = array[0];
  let length = array.length;
  for(let i = 0; i<length; i++){
    if(array[i]>=max){
      max = array[i];
    }
  }
  return max;
}

console.log(findMax(array));

