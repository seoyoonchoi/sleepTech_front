const scores = [75,82,59,94,68,72,89,55];
function passingScores(scores){
  const passing = scores.filter(score=>score>=60);
  const passingCount = passing.length;
  const passingAverage = passing((acc,score)=>acc+score,0)/passingCount;
  return [passingCount, passingAverage];

}

const result = passingScores(scores);
console.log(result);

const passingCount1 = result[0];
const passingAverage = result[1];

//!구조분해 할당

//배열이나 객체의 각 요소를 한번에 각 변수에 할당한다.
//const(let) [변수명1, 변수명2] = [값1,값2];
// const [passingCount2, passingAverage2] = passingScores(scores);
// let passingCount2 = 10;

console.log(`60점 이상의 점수 개수: ${passingCount2}` );
console.log(`60점 이상의 점수 평균 : ${passingAverage}`);

const[num1,num2] = [10,20];
console.log(num1);
console.log(num2);

function add(a,b){
  return a+b;
}

console.log(add(num1,num2));
const numbers = [1,2,3,4,5];
const newNumbers = numbers.map(n=>n+10).filter(n->n%2 !== 0);

const words = ['apple', 'monkey', 'banana', 'pig', 'grape', elephant];
