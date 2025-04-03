import React, { useReducer, useState } from 'react'

export type CountState = {
  count: number
}

export type CountAction = {type : 'increment'}|{type: 'decrement'};

export function reducer(state: CountState, action: CountAction):CountState{
  switch(action.type){
    case 'increment':
      return{count: state.count+1};
    case 'decrement':
      return{count: state.count-1};

  }
}


function UseReducer01() {

  const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, {count: 0});
  
  const handleIncrement = () => {
    setCount(prevCount => prevCount+1);

  }
  const handleDecrement = () => {
    setCount(prevCount => prevCount-1);
    
  }
  return (
    <div>
      <h5>useState를 이용한 상태관리</h5>
      <p>count : {count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>

      <h5>useReducer를 사용한 상태관리</h5>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>증가</button>
      <button onClick={() => dispatch({type: 'decrement'})}>감소</button>
    </div>
  )
}

export default UseReducer01