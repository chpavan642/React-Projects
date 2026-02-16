import { useState } from "react";

function App(){
  const [count, setCount]=useState(0);

  return (
    <div style={{textAlign:"center",marginTop:"10px"}}>
      <h1>React counter</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)} >Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;