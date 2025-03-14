let num1 = 10;
let num2 = num1;

console.log(num2);

num2 = 20;
console.log(num1);
console.log(num2);

//===============
let array01 = [11,22,33];
let array02 = array01;

console.log(array02);//결과 [11,22,33]

array01[1] = 55;
console.log(array02);//결과 [11,55,33]

array02[2] = 66;
console.log(array01);//결과 [11,55,66]

let sports=['soccer','basketball','baseball'];
let copySports = [...sports];
let copy = ['swimming',...sports,'icehocky'];

console.log(copySports);
console.log(copy);

copySports[0] = 'soccer';
console.log(sports[0]);

//2)하나의 형태로 결합
let mergeSports1 = [...sports,...copy];
let mergeSports2 = [...copy, ...sports];