let fruits = ['apple', 'banana','mango'];
let numbers = [1,2,3,4,5];
let bools = [true,false];


//js 배열에는 요소의 모든 타입이 동시에 삽입

for(let i = 1; i<6;i++){
  let stars = '';
  for(let j=0;j<i;j++){
    stars+='*';
  }
  console.log(stars);
}

let b = 0;
while(b<5){
  console.log(b);
  b++;
}