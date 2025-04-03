import React, { useEffect, useState } from 'react'

function UseEffect01() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('bergerac');
  const [time, setTime] = useState<number>(0);



  useEffect(() => {console.log(`Count: ${count}`);
  },[count]);
  useEffect(() => {
    console.log(`Name:${name}`);
  }, [name]);
  useEffect(() => {
    console.log('컴포넌트 렌더링');
  }, []);
  useEffect(() => {
    console.log(`Name: ${name} / Count: ${count}==`);

  },[name, count]);

  useEffect(() => {
    console.log('Timer Start');
    const timer = setInterval(() => {setTime(prev => prev+1
    );},1000);

    return() =>{
      clearInterval(timer);
      console.log('타이머 정리됨');
      
    }
  },[]);




  return (
    <div>
      <button onClick = {() => setCount(prevCount => prevCount+1)}>증가</button>
      <span>
        {count}
      </span>
      <button onClick = {() => setCount(prevCount => prevCount-1)}>감소</button>
      <br />
      <span>{name}</span>
      <button onClick={() => setName(name === 'bergerac' ? "roxan" : "bergerac")}>이름변경</button>
      <p>시간 : {time}초</p>
    </div>
  )
}

export default UseEffect01