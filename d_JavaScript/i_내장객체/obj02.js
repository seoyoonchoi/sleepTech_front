let data = [
  {
    name: 'bergerac',
    age : '28',
    job: 'soilder',
    hobby : {first : 'write poetry', second : 'sword fight'}

  },{
    name: 'roxan',
    age : '24',
    job: 'nobility',
    hobby: {first : 'reading', second : 'sword fight'}
  }
];

console.log('원본객체]\n');
console.log(JSON.stringify(data));
console.log(JSON.stringify(data,null,2));
console.log('속성 추출 JSON 데이터')

let jsonData = JSON.stringify(data);
console.log(jsonData);

