import { useState } from "react"

function App() {
  const [count,setCount] = useState(0);
  return (
   <div>
    현재 count 값: {count} <br/>
    <button onClick={()=>setCount(count+1)}>증가</button>
   </div>
  )
}

export default App
