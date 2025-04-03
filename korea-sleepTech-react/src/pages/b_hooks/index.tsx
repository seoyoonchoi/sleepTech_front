import React from "react";

import UseState01 from "./a_useState/UseState01";
import UseState02 from "./a_useState/UseState02";
import UseState03 from "./a_useState/UseState03";
import UseState04 from "./a_useState/UseState04";
import UseState05 from "./a_useState/UseState05";
import UseState06 from "./a_useState/UseState06";
import UseStatePractice from "./a_useState/Practice";

import UseRef01 from "./b_useRef/UseRef01";
import UseRef02 from "./b_useRef/UseRef02";
import UseRefPractice from "./b_useRef/Practice";

import UseEffect01 from "./c_useEffect/UseEffect01";
import UseEffect02 from "./c_useEffect/useEffect02";
import UseCallback from "./d_useCallback_useMemo/UseCallback";
import UseReducer01 from "./e_useReducer/UseReducer01";
import UseReducer02 from "./e_useReducer/UseReducer02";
import Custom01 from "./f_customHook/Custom01";
import TodoAppLocalStorage from "./z_todo/TodoAppLocalStorage";

const h2Style = {
  backgroundColor: "black",
  color: "orange",
};

function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        === 리액트 Hooks ===

      </h1>
      <h2 style = {h2Style}>웹캠앱구현</h2>
        <div style={{margin: '20px auto', padding: '10px', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {/* <Practice01/> */}
          
          </div>

      <h2 style = {h2Style}>리액트 Hooks = Todos</h2>
      <div>
        <div style={{margin: '20px auto', padding: '10px', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TodoAppLocalStorage/>
        </div>

      </div>

      <h2>커스텀 훅</h2>
      <Custom01/>
      <hr />

      <h2>useReducer</h2>
      <UseReducer01/>
      <UseReducer02/>

      <h2> 리액트 useCallBack</h2>
      <UseCallback/>

      

      <h2 style={h2Style}>리액트 Hooks - useRef</h2>
      <UseRef01 />
      <UseRef02 />
      <UseRefPractice />

      <h2 style={h2Style}>리액트 Hooks - useState</h2>
      <UseState01 /> <hr />
      <UseState02 /> <hr />
      <UseState03 /> <hr />
      <UseState04 /> <hr />
      <UseState05 /> <hr />
      <UseState06 /> <hr />
      <UseStatePractice /><hr />

      <UseEffect01/>
      <UseEffect02/>
      
      

    </div>
  );
}

export default Index;