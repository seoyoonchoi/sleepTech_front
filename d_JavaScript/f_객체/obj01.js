console.log(typeof[1,2,3]);

let lsa1 = ['cyrano','bergerac'];

let lsa2 = {
  //키(이름)은 문자열로 작성하며 따옴표를 생략한다.
  1: 'cyrano',
  2: 'bergerac',
  lastName: 'bergerac',
  firstName: 'cyrano',

  height: 178,
  hobby: ['poet','pencing']
}

function Human(nameParam, heightParam){
  //this 키워드 : 해당 생성자 함수로 생성되는 객체 그 자체를 의미하며 각 객체마다 값이 달라짐
  this.name = nameParam;
  this.height = heightParam;
  
  this.greet = function(){//익명함수 : 함수표현식
    console.log(`Hello, ${this.name}`);
  }
  }

  let person1 = new Human('roxan', 169);
  let person2 = new Human('cyrano', 178);

  console.log(person1.name);
  console.log(person1.height);
  person1.greet();

  console.log(person2.name);
  console.log(person2.height);
  person2.greet();

