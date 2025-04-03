import React, { useCallback, useState } from 'react'

const myFunc = () => {
  console.log('함수 다시 생성');
}

function UseCallback() {

  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const handleCountClick = () => {
    setCount(prevCount => prevCount+1);

  }
  return (
    <div><h5>useCallback</h5>
    <p>count : {count}</p>
    <button onClick={handleCountClick}>부모버튼</button>
    <br />
    <input 
    type="text"
    value={text}
    onChange={(e) => setText } />
    
    </div>
  )
}

export default UseCallback