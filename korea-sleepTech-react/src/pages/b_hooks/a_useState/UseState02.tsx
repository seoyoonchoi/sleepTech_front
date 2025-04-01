import React, { useState } from 'react'

//!useState : 컴포넌트 내에서 데이터에 대한 상태관리
 // UI에서 발생하는 이벤트에 반응하여 상태가 변화된다.

//*데이터 타입 정의 로그인
interface ILogin{
  id: string;
  password: string;
}

const loginInitialValue= {
  id : '',
  password: ''
}

function UseState02() {
  const[inputValue, setInputValue] = useState<string>('');
  const [login, setLogin] = useState<ILogin>();

  //*EventHandler정의
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setInputValue(e.target.value);
    //input창에 change변화가 일어나면 처리할 로직
  }

  const handleResetClick = () => {
    setInputValue('');
  }

  const handleLoginChange = () => {

  }

  const handleResetLogin = () => {

  }

  const handleLoginSubmit = () => {

  }

  return (
    <div>
      <p style={{color: 'lightcoral'}}>useState&이벤트 핸들러</p>
      <input type="text" value={inputValue}
      /*
      onChange이벤트
      : 사용자가 요소에 변화를 일으킬 때마다 발생하는 이벤트
      input, select, textarea등의 요소에 적용된다.
      */ 
      onChange={handleInputChange}
      />

      <select onChange={handleInputChange}>
        <option value="lotte">lotte</option>
        <option value="kia">kia</option>
      </select>
      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>inputValue: {inputValue}</p>

      <h5>여러개의 입력 상태 관리</h5>
      {/* <form onSubmit={handleLoginSubmit}>
        <input type="text" name='id' placeholder='id' value={login.id} onChange={handleLoginChange} />
        <input type="text" name='password' placeholder='pw' value={login.password} onChange={handleLoginChange} /> */}
      {/* </form> */}

    </div>
  )
}

export default UseState02