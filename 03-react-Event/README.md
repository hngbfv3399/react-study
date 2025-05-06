# 이벤트 핸들러를 활용해 다양한 동작을 구현해보자 - Part 1

# 목차
- 개요
- 기존 JS에서의 이벤트 처리 방식
- React에서의 이벤트 처리 방식
- (추가) useState에서의 비동기처리 방식
- 마무리 및 Part 2 소개

# 개요
웹 페이지에서 유저와 상호작용하는 모든 행위들을 이벤트라고 합니다. 클릭,마우스오버,스크롤,키 입력 등 이와 같은 행위를 웹 페이지에서 반응을 해주는것을 이벤트라고 합니다. 뭐 JS에서 event를 해보셨다면 어떤 느낌인지 알 것 같습니다.


# 기존 JS에서의 이벤트 처리 방식

기존에 JS에서 이벤트 처리 방식은 이런식으로 했습니다.

```html
<div id="app">
    취미로개발
</div>
<button onclick="changeName()">이름 바꾸기</button>
<script>
    function changeName(){
        const app = document.getElementById('app');
        app.innerHTML = "검무컴컴한참치";
    }  
</script>
```
또는
```html
<div id="app">
    취미로개발
</div>
<button id="changeButton">이름 바꾸기</button>
<script>
    document.getElementById('changeButton').addEventListener('click',changeName);
    function changeName(){
        const app = document.getElementById('app');
        app.innerHTML = "검무컴컴한참치";
    }  
</script>
```
이런 방법도 있네요.
흔히 순수 JS에서의 이벤트 처리 방식은 두 가지로 나누어지죠 HTML 코드 안에서 onevent을 추가 하거나, JS 코드 안에서 addEventListener를 추가 하는 거죠? 아니면 **창 크기 변경 감지** 를 하고 싶다면 onevent 말고 addEventListener가 정답 이겠네요.
하지만 지금은 JS 강좌가 아닌 React에서의 이벤트 처리 방식에 대해 간단히 살펴보겠습니다.

# React에서의 이벤트 처리 방식

React에서는 이벤트 처리 방식은 JS와 비슷하지만 몇가지 차이점이 있습니다.

1. 이벤트 이름 작성 방식
JS에서는 이벤트를 추가할때 onclick,onscroll처럼 전부 소문자로 작성합니다.
React에서는 onClick,onScroll 처럼 카멜케이스로 작성합니다.

2. 이벤트에 전달하는 값
React에서는 함수 자체를 이벤트 값으로 넘깁니다.
ex)
```jsx
<button onClick={handleClick}>클릭</button>
```
여기서 `handleClick()` 처럼 괄호를 붙이면 바로 실행이 되는 함수를 호출하기 때문에 이벤트가 발생 하기도 전에 함수가 호출이 됩니다.
그래서 다음처럼 '함수참조'를 넘겨야 합니다.
ex)
```jsx
<button onClick={handleClick}>클릭</button> // O
<button onClick={handleClick()}>클릭</button> // X 바로 실행됨!
```
또 다른 방법으로는 이벤트 함수에 인자를 넣고 싶다면 즉시 실행되는 함수가 아닌 화살표 함수를 사용 하시면 됩니다.
ex)
```jsx
<button onClick={() => setCount(count + 1)}>증가</button>
```
다음 코드는 이벤트 함수를 사용하는 예시 입니다.

ex 1 카운트 증가 감소 초기화)

```jsx
import { useState } from "react"

function App() {
  const [count,setCount] = useState(0);
  return (
   <div>
    <h1>Event Handler</h1>
    {count}
    <br />
    <button onClick={()=>setCount(count+1)}>증가</button>
    <button onClick={()=>setCount(count-1)}>감소</button>
    <button onClick={()=>setCount(0)}>초기화</button>
   </div>
  )
}

export default App;
```

ex 2 다크모드)

```jsx
import { useState } from "react"

function App() {
  const [isDarkMode,setIsDarkMode] = useState(false);
  const darkMode = {
    width : '100vw',
    height : '100vh',
    background : 'black',
    color : 'white'
  }
  const defaultMode = {
    width : '100vw',
    height : '100vh',
    background : 'white',
    color : 'black'
  }
  const changeDarkMode = ()=>{
    setIsDarkMode(!isDarkMode);
  }
  return (
   <div style={isDarkMode ? darkMode :defaultMode }>
    <h1>Event Handler</h1>
    <button onClick={changeDarkMode}>다크모드</button>
    
   </div>
  )
}

export default App;
```

# (추가) useState에서의 비동기처리 방식

## 1단계 준비단계
useState에서의 비동기처리 방식에 대해 설명하기 전에 비동기처리 개념에 대해 간단히 알아보겠습니다.
비동기처리란 어떤 함수가 실행을 완료할 때까지 기다리지 않고 다음코드를 먼저 실행하는 방식을 말합니다. 예를 들어 아레와 같은 코드가 있다고 해봅시다.
```js
console.log('A');

setTimeout(() => {
  console.log('B');
}, 1000);

console.log('C');
```
만약 이 코드를 처음 본다면 저희 머리속은 이렇게 생각할겁니다.
1. A를 출력
2. 1000ms후(1초후) B출력
3. C출력

라고 생각하실겁니다. 하지만 직업 실행 해보면
1. A를 출력
2. C를 출력
3. 1초후 B를 출력
이 순서로 나옵니다. 왜 이런 결과가 나올까요?
코드에 보이는 setTimeout 함수는 비동기 함수 이기 때문에 실행을 **예약**만 해두고 다음 코드인 `console.log('C');`를 실행합니다. 
즉 비동기처리는 먼저 처리 할 수 있는 코드 먼저 처리를 한 후 나중에 결과가 준비되면 실행을 하는 방식입니다.
비동기 처리에 대한 더 깊은 내용은 부록 강의를 통해 더 자세히 알려드리곘습니다.

## 2단계 useState에서의 비동기처리 방식
이제 저희는 useState에서의 setState의 비동기처리 방식에 대해 설명해 드리곘습니다.
정확히 말하면, setState는 진짜 비동기 함수는 아니지만, React가 상태 업데이트를 즉시 처리하지 않고 예약해두는 방식 때문에 비동기처럼 보입니다.
아레의 코드를 한번 봐봅시다.
```jsx
function App() {
  const [count,setCount] = useState(0);

  const handleEvent = ()=>{
    setCount(count + 1);
    console.log(count);
  }
  return (
   <div>
    <h1>Event Handler</h1>
    <h2>{count}</h2>
    <button onClick={handleEvent}>증가</button>

    
   </div>
  )
}
```
콘솔 창을 열고 한번 실행을 해보시면 조금 뭔가 다르다는게 보일겁니다.
숫자가 증가는 하는데 콘솔 창에서 보이는 숫자와 렌더링 후 화면에 보이는 숫자가 다르다는걸 위 코드를 통해 알 수 있습니다.
왜 이런 결과가 나올까요? 그 이유는 `setCount`가 호출된 직후에 바로 상태가 바뀌는게 아니라 React가 렌더링 타이밍에 맞춰 상태 업데이트를 예약을 해두기 때문입니다.
그러면 이것이 무엇이 문제가 되냐면
```jsx
import { useState } from "react"

function App() {
  const [count,setCount] = useState(0);

  const handleEvent = ()=>{
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
   <div>
    <h1>Event Handler</h1>
    <h2>{count}</h2>
    <button onClick={handleEvent}>증가</button>

    
   </div>
  )
}

export default App;
```

코드만 보신다면 `setCount`를 두 번 호출 했으니 2씩 증가하곘구나 라고 생각하기 마련입니다. 하지만 실제로 실행을 해보면 1씩 증가 하는걸 볼 수 있습니다. 
`setCount(count + 1)`은 현재 상태값을 기준으로 동작을 합니다. 즉 `setCount` 두 줄 모두 `count`가 0일때 실행이 되기 때문에 결과적으로 1만 증가하기 때문입니다.

이럴때 해결방법은 이전 값을 불러와서 넣는 방식이 있는데요.
`setCount(count + 1)`대신 `setCount((prev)=> prev + 1)` 방식을 사용하시면 됩니다.

# 마무리 및 Part 2 소개
일주일에 한 번 올린다는 약속을 어기고 2주를 넘겨 강의를 올리게 된점 죄송합니다. 급성위염하고 장염이 걸려 후유증 때문에 공부도 쉬고 집에서 계속 쉬고 있었습니다.지금은 좋은 컨디션을 유지 할려고 노력중이니 앞으로 좋은 강의 글을 올리도록 하곘습니다.
이번 강의는 간단히 Click 이벤트 하고 비동기에 대해서 간단히 배웠습니다. 이론이 생각보다 길어져 파트를 나누기로 했습니다.
Part 2에서는 다양한 이벤트 처리 방식과 다양한 폼 처리 방식에 대해 배워 볼겁니다.
이번 part 1강의에는 과제가 따로 없으니 읽고 복습하시면 Part 2 강의를 더 이해하기가 쉽습니다