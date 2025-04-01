import React from 'react'
import UseState01 from './a_useState/useState01';
import UseState02 from './a_useState/UseState02';
import UseState03 from './a_useState/UseState03';

function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: "black",
        color: "pink",
      }}> ===리액트=====

      </h1>
      <h2 style = {{backgroundColor: "black",
        color: "orange",}}>리액트</h2>
      <UseState01/>
      <hr />
      <UseState02/>
      <hr />
      <UseState03/>

    </div>
  )
}

export default Index;