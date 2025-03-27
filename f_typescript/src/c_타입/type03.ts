export const tmp = '';

type TextType = string;
let textMsg: TextType = '텍스트 문자열 입니다';

type NumberType = number;
let num: NumberType = 123;

type UserType = {
  name?: string;
  readonly age: number;

}

const user1: UserType = {
  age: 21,
}

type User = {
  id: string;
  password: string;
}

type Validuser = (user: User) => boolean;

const isValidUser: Validuser = (user) => user.id !== '';

let userA: User = {
  id: 'qweasdf',
  password: 'vd'
}

let userB: User = {
  id: '',
  password: 'qwerasdf'
}

console.log(isValidUser(userA));
console.log(isValidUser(userB));

type FuncType = (num: number) => number;
const exampleFunc = function(num): FuncType {
  num *= 2;
  return num;
}

