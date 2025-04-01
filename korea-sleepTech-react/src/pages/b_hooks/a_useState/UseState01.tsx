import React, { useState } from 'react'

// type Props = {}

//리액트 함수형 컴포넌트에서 사용할수 있는 기능으로 
/*
use 키워드로 시작한다. 여기서 해당 기능을 사용한다는 의미이다
useState : 상태기능을 여기서 사용한다
useEffect : 부수효과 기능을 여기서 사용한다.
!UseState======
React에서 제공하는 Hooks 중하나이며
함수형 컴포넌트 내에서 상태를 관리하는 기능이다.
>> 컴포넌트 단위에서의 상태를 관리한다

useStateHook 호출 시 변화되는 상태값과 해당 상태값을 update 하는 함수를 제공한다. 
>>상태 업데이트 함수는 '비동기적 처리'가 기본으로 진행되고
>>상태변경 시 '컴포넌트 재렌더링'을 유발한다.


*/ 

function UseState01() {
  //!UseState 의 기본구조

  // const[state, setState] = useState<type>(initialValue);
  /*
  state : 현재의 상태값(qustn)
  setState: 상태를 업데이트 하는 함수
  >> 관례상 set+현재 상태값 변수명으로 명명한다.
   ex)count(setCount), name(setName), userData(setUserData)
   initialValue: 상태의 초기값
   -<type> : 상태값의 타입(선택)

   *hook는 React내부의 함수 => import 해서 사용한다.
   
  */

   const[count, setCount] = useState<number>(0);

   //setCount는 상태 설정 함수를 그대로 사용하며 이전의 상태를 직접 참조하며 주로 현재의 값과 관련이 없는 변화가 이루어질 경우 사용한다.

   const handleUpClick = () => {
    /*해당이벤트 핸들러 실행 시 컴포넌트 전체의 상태에 대한 증가만 이루어진다. set은ㄴ 상태변경 함수 내에서 콜백함수를 사용한다.
    그렇게 해당 콜백함수의 인자는 최신의 상태값(매개변수명 prev-상태명)
    ex) prevCount, prevName등
     */

    // setCount(count+1);

    setCount(prevCount => prevCount+1);//콜백함수
    setCount(prevCount => prevCount+1);//콜백함수
   }
   const handleDownClick = () => {
    setCount(count-1);
   }

   const [message, setMessage] = useState<string>('Hello');
  //  if(true){
    const[msg, setMsg] = useState<string>('hi');
  //  }



  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={handleUpClick}>count  증가 </button>
      <button onClick={handleDownClick}>count  감소 </button>
      <p>{message}</p>
      <p>{msg}</p>

    </div>
  )
}

export default UseState01