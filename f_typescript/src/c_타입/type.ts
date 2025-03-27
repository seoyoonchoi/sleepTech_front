export const tmp = '';

let name: string = 'bergerac';
let age: number = 28;
let isStudent: boolean = true;

let anyData = '문자열';
let list1: string[] = ['1','2','3'];
let list2: Array<number> = [4,5,6];

function voidType(parameter: number): void{
  console.log(parameter);
  return;
}

voidType(10);

function stringReturn(str: string, str2: string): string{
  return str+str2;
}

console.log(stringReturn('cyrano ','bergerac'));


let nullType: null;
//이렇게 되어버리면 nullType에는 null만 들어ㅏㄹ 수 있다.

let username: string = 'bergerac';
let userAge: number = 28;
let isSubscribed: boolean = false;

let fruits: string[] = ['grape','bananan','apple'];
let numbers: Array<number> = [4,5,6];

function printMessage(message: string): void{
  console.log(message);
}

