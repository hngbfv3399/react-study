import { useState } from "react"

function App() {
  const [count,setCount] = useState(0);
  return (
   <div>
    <h1>Event Handler</h1>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count + 1)}>증가</button>
    <button onClick={()=>setCount(count - 1)}>감소</button>
    <button onClick={()=>setCount(0)}>초기화</button>

    
   </div>
  )
}

export default App;