let obj = {
  name : 'bergerac',
  age : 28,
  job : 'soldier'
}

if(obj.name !== undefined){
  console.log(obj.name);
}else{
  console.log('name속성 X');
}

obj.name || console.log('name 속성X');

obj.hobby || console.log('hobby 속성X');

obj.name && console.log('name속성 O');
obj.hobby && console.log('hobby속성 O');