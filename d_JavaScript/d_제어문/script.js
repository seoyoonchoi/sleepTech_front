while(true) {
  const input = prompt('출력할 구구단을 입력하세요');
  if(input.toLowerCase()==='exit'){
    console.log('프로그램을 종료합니다');
    break;
  }

  const number = Number(input);

  if(number>=1&&number<=9){
    console.log(`${number}단`3);
    for(let i = 1;i<=9;i++){
      console.log(`${number}X${i}=${number*i}`);
    }
  }else{
    console.log('올바른 숫자를 입력하세요');
  }
}