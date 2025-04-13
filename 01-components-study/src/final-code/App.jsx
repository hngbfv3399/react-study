import Components from "./components/Components";

function App() {
  const text = "안녕하세요";
  const myStyle = {
    fontSize : '32px',
    color : 'green',
    textAlign : 'centet'
  }
  return (
   <div>
    <div style={myStyle}>
       {text} 이건 App 컴포넌트 입니다.
    </div>
    <Components/>
   </div>
  )
}

export default App;