# useState로 데이터를 관리해보자

# 목차
- 상태란?
- useState 훅 사용해보기
- 과제
---
## 상태(state)란?

리액트에서는 기존 바닐라 JS와 다른 방식으로 변수를 저장합니다. 이 내용을 이해를 하기 위해 렌더링이라는 개념을 이해하셔야 합니다.
**렌더링**은 컴포넌트가 실행되며 그 결과로 화면(UI)이 갱신되는 것을 말합니다.
예를 들어 밑에 있는 코드를 보시면
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        
    </div>
    <script>
        const app = document.getElementById('app');
        app.innerHTML = "Hello World";
    </script>
</body>
</html>
```
위 코드를 한번 기존 프로젝트가 아닌 새로운 환경에서 이 코드를 한번 실행해보세요. HTML안에는 div 태그에 속성에는 id 값 'app' 을 받고 있고 그 안에 자식 또는 내용들이 없습니다. 하지만 막상 실행을 해본다면 화면에는 'Hello World'라는 문구가 보일겁니다. 이것은 JS에서 id요소를 감지를 해서 그 안의 내용을 Hello World로 바꾼다는 코드를 작성했기 때문인데요. 이런식으로 요소를 감지하고 값을 바꾸고 그대로 HTML에 반영을 하는 행위를 렌더링이라고 합니다. 자 그러면 제가 왜 렌더링에 대해서 설명을 했는지 자세히 알아보기 위해 기존에 변수를 저장하는 방식으로 리액트 코드를 짜보겠습니다.
```jsx
function App() {
    let count = 0;
    return (
        <div>
          {count}
          <button onClick={()=>count++}>증가</button>
        </div>
    );
}

export default App;
```
코드만 본다면 저 코드는 문법적으로 틀린 코드가 아닙니다.
말그대로 count 값을 증가를 시키는 코드를 짰을 뿐이니깐요. 하지만 처음 렌더링을 할때 0이라는 값은 잘보이지만 재렌더링 즉 JS 값이 바뀌었을때 HTML을 다시 그리는 행위를 하였을때 값이 안바뀌는걸 볼 수 있습니다.
(재렌더링은 JS 값이 바뀌는 것과는 별개로, React 컴포넌트 함수가 다시 실행되어 화면(UI)이 다시 그려지는 것이라고 이해하시면 됩니다.
말 그대로 HTML의 내용을 다시 그리는 과정이에요) 하지만 count의 값은 계속 바뀌고 있습니다.
못믿으실 수 있어서 밑 코드를 보여드리겠습니다.
```jsx
function App() {
    let count = 0;
    const handleCount = ()=>{
      count++;
      console.log('count',count);
      
    }
    return (
        <div>
          {count}
          <button onClick={handleCount}>증가</button>
        </div>
    );
}

export default App;
```
해당 코드는 지금 단계에서는 완벽하게 이해를 하실 필요가 없습니다. 단순히 HTML안에서는 count 값이 계속 0으로만 고정되는데 막상 콘솔창에서는 count 값이 늘어나는 아이러니한 상황을 이해하기란 힘들죠 이 처럼 기존 JS변수를 사용 할때는 초기 렌더링에서는 잘보이지만 재렌더링 과정에는 값이 반영이 안되는 현상을 느낄 수 있습니다. 이때 재렌더링을 하더라도 변수의 값을 그대로 반영하려면 어떻게 해야 할까요? 이때 필요한 것이 **상태**입니다. 상태에서는 변수의 값과 변수의 값을 수정 할 수 있는 함수를 값으로 받습니다. 일단 용어를 통일 시키기 위해 변수의 값은 **상태 또는 상태 값** 이 상태를 어떤식으로 관리 하는것(증가, 감소, 변경)와 같은 행위를 **상태 관리**라고 통일 하겠습니다. 다음 장에서는 **상태 관리**를 사용하기 위한 훅(지금 단계에서는 훅은 리액트에서 필요로 하는 함수라고 이해 하시면 됩니다.) **useState**에 대해 설명해드리겠습니다. 

## useState 훅 사용해보기

이제 useState훅에 대해 설명을 하고 사용법 그리고 실습 예제를 해보겠습니다.
## useState란?
기본적으로 상태를 관리하고 싶다면 useState 훅을 많이 사용할겁니다. useState는 상태 값을 저장을 해주는 함수이며 상태 값하고 상태 관리값(함수)를 선언 및 초기화도 해줍니다. 사용 예시를 보여드리겠습니다.
```jsx
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0);
    return (
        <div>
          {count}
          <button onClick={()=>setCount(count+1)}>증가</button>
        </div>
    );
}

export default App;
```
위 코드를 보시면 처음 반응이 '엥? 이게 무슨 코드지?'
라고 생각하실꺼 같습니다. 처음 보기엔 너무 낯선코드니깐요. 차근 차근 살펴보겠습니다.
```jsx
import { useState } from "react";
```
useState 훅을 사용하기 위해 import를 해줍니다.

```jsx
const [count,setCount] = useState(0);
```
count : 상태 값
setCount : 상태관리 값(함수)
useState(0) : 초기 값 (지금은 0으로 초기화)
useState훅은 항상 배열구조 분해 할당으로 값을 받아야 합니다. 참고로 JS변수는 컴포넌트가 다시 실행 된다면 값을 초기화 하지만 useState는 값을 기억을 해주기 때문에 값 유지가 계속 될 수 있습니다.

```jsx
        <div>
          {count}
          <button onClick={()=>setCount(count+1)}>증가</button>
        </div>
```
상태 값을 보이게 하고 싶다면 {}<- 이 중괄호 안에 작성하시면 됩니다. 즉 HTML 외의 코드를 작성하고 싶다면 중괄호를 추가하시면 됩니다.
setCount() 함수는 상태 값을 변경을하고 React안에서 컴포넌트를 다시 실행을 하고 UI를 다시 그려줍니다. 이 과정을 재렌더링이라고 합니다. 즉 상태를 변경하고 싶다면 count++ 이런식으로 바꾸기 보단 setCount 함수를 꼭 써야 한다는 말입니다.
useState 에서는 숫자뿐만 아니라 문자열, 객체, 배열, 논리등 모든 데이터 타입을 저장 할 수 있습니다.
ex)
```jsx
const [isClicked,setIsClicked] = useState(false);
const [name,setName] = useState("취미로개발");
const [userList,setUserList] = useState(['본인','상태','애인','가족'])
const [userInfo,setUserInfo] = useState({
    name : "취미로개발",
    age : 23,
    blood_type : 'O' 
  })
``` 


### 정리 및 참고
1. useState는 리액트에서 상태 값을 저장하고, 관리해주는 훅 이다.
2. const [상태값, 상태변경함수] = useState(초기값) 형태로 사용한다.
3. 일반 변수와는 다르게, 컴포넌트가 다시 실행돼도 상태 값을 기억한다.
4. 상태 값을 화면에 출력하려면 {} 중괄호를 사용해야 한다.
5. 상태를 변경할 때는 반드시 set함수를 사용해야 하고, 이 과정에서 컴포넌트가 다시 렌더링된다.
6. useState는 숫자뿐만 아니라 문자열, 배열, 객체, 불린 등 다양한 타입을 상태로 가질 수 있다.

⚠️ 주의 할점
- set함수를 사용하지 않고 직접 값을 바꾸면 화면이 업데이트되지 않습니다.
```jsx
// ❌ 이렇게 하면 화면은 바뀌지 않음
count++;

// ✅ setCount로 변경해야 함
setCount(count + 1);
```



## 과제
1. 카운트를 증가 감소 0으로 초기화 하는 코드를 작성해보세요.