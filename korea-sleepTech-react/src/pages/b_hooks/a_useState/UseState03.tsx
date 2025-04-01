import React, { useState } from 'react'

/*
이벤트 타입
이벤트 종류에 따라 타입 정의가 상이하다
입력 필드에대한 변경 이벤트 : React.ChangeEvent
클릭에 대한 이벤트 : React.ClickEvent
폼 제출에 대한 이벤트 : React.FormEvent
>> 폼 제출 기본 동작 방지 : e.preventDefault();
ex)키보드 이벤트 : React.KeyboardEvent
ex) 마우스 이벤트 : React. KeyboardEvent

*/
function UseState03() {
  const[count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const onIncrementButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(prevCount => prevCount+1);
    console.log(e.target);
  }

  const onNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(e.target);
  }

  //키보드 이벤트 핸들라
  //Enter키 클릭에 대한 반응처리
  const onEnterKeyboard = (e:React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if(e.key === 'Enter')
  }

  return (
    <div>
      <h5>이벤트 객체의 여러 타입</h5>
      <p>현재 카운트 {count}</p>
      <button onClick={onIncrementButton}>증가</button>
      <input type="text" onChange={onNameInput} placeholder='이름을 입력해 주세요' value={name} />
    </div>
  )
}

export default UseState03