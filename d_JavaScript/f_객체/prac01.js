let person = {
  name: 'bergerac',
  age : 20,
  isStudent : false
}

let fruits = ['peach', 'apple', 'banana'];
console.log(fruits[1]);

function add(a,b){
  return a+b;
}

console.log('=== 문제 2 ===');

for (let p in person) {
  console.log(`${p}: ${person[p]}`);
}



for (let fruit in fruits) {
  console.log(fruits[fruit]);
}

console.log(add([1,2,3],[4,5,6]));

const users = [
  {name: "cyrano", age: 25},
  {name: "roxan", age: 20},
  {name: "Chrintian", age: 17}
];

function adultUserNames(users){
  return users
    .filter(user => user.age >=18)
    .map(user => user.name);
}

console.log(adultUserNames)



