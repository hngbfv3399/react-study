# 컴포넌트에 대하여

## 목차

- 컴포넌트란?
- 컴포넌트 생성 및 추가
- 과제

# :package: 컴포넌트란?

프론트엔드에서 가장 기본적이면서도 중요한 개념 중 하나가 바로 **컴포넌트**입니다.

간단히 말해서, **컴포넌트는 HTML, CSS, JS가 하나로 합쳐진 덩어리**라고 볼 수 있어요.

클래스와 비슷하면서도 다르게, 컴포넌트는 **UI를 구성하는 독립적인 조각**입니다.

그럼, **왜 컴포넌트를 사용해야 할까요?**

##  컴포넌트를 사용하는 이유

- **재사용성**
    
    한 번 만든 컴포넌트는 여러 곳에서 재사용할 수 있습니다.
    
- **유지보수 용이성**
    
    컴포넌트는 각각 독립적이기 때문에, 오류 수정이나 업데이트가 훨씬 쉽습니다.
    
- **가독성 향상**
    
    UI를 역할별로 나누기 때문에, 구조를 이해하고 관리하기가 편합니다.
    
- **상태 관리의 단위**
    
    컴포넌트는 각각 자신만의 데이터를 가질 수 있고, 이 데이터를 관리하는 것을 "상태 관리"라고 합니다.
    
    (이 부분은 추후 상태 관리 강의에서 더 자세히 다룰게요.)
    # 컴포넌트 생성 및 추가

이제 실제로 컴포넌트를 만들어보겠습니다.

사실 여러분은 이미 컴포넌트를 **간접적으로** 만들어 본 적이 있어요.

바로 이전 강의에서 소개한 **JSX** 예제입니다.

```jsx
function App() {
  return (
    <div>
      Hello World
    </div>
  )
}

```

어떤가요? `App`이라는 함수가 있고, 그 안에서 HTML 코드를 반환하고 있죠?

**이것이 바로 컴포넌트**입니다.

컴포넌트는 이렇게 HTML, CSS, JS를 한 곳에 담아 구성합니다.

CSS와 JS를 좀 더 추가해보면 다음과 같이 만들 수 있어요:

```jsx
function App() {
  const text = "안녕하세요";
  const myStyle = {
    fontSize: '32px',
    color: 'green',
    textAlign: 'center'
  }

  return (
    <div style={myStyle}>
      {text}
    </div>
  )
}

export default App;

```

물론 `App` 하나만 가지고는 부족하겠죠?

**우리는 이제 새로운 컴포넌트를 직접 만들어볼 겁니다.**

#  실습: 컴포넌트 만들기

아직 실습 코드를 받지 않으셨다면, 아래 링크에서 다운로드해주세요:

[실습 코드 GitHub 링크](https://github.com/hngbfv3399/react-study)

## 실습 폴더 위치

1. `01-components-study` 폴더를 엽니다.
2. `src/try-it` 경로로 이동합니다.
3. 그 안에 **components**라는 폴더를 새로 만들어주세요.
4. 폴더 안에 `Component.jsx` 파일을 생성합니다.

## 새로운 컴포넌트 작성

```jsx
// src/try-it/components/Component.jsx
function Components() {
  return (
    <div>
      여기는 제가 만든 컴포넌트에용
    </div>
  )
}

export default Components;

```

## 컴포넌트 만드는 공식

1. **컴포넌트 이름을 정합니다.** (대문자로 시작!)
2. **함수를 만들고 `return`으로 JSX를 반환합니다.**
3. **`export default`로 외부에서 쓸 수 있게 만듭니다.**

---

## 컴포넌트 불러오기 & 사용하기

만든 컴포넌트를 `App.jsx`에서 불러와 봅시다.

```jsx
import Components from "./components/Components";

function App() {
  const text = "안녕하세요";
  const myStyle = {
    fontSize: '32px',
    color: 'green',
    textAlign: 'center'
  }

  return (
    <div>
      <div style={myStyle}>
        {text} 이건 App 컴포넌트입니다.
      </div>
      <Components />
    </div>
  )
}

export default App;

```

## 사용 방법 요약

1. `import Components from "./components/Components"` 로 컴포넌트를 불러옵니다.
2. `<Components />`처럼 사용하면 됩니다.
3. 여러 번 추가하고 싶다면 `<Components />`를 여러 번 쓰면 돼요!

## 과제

- 자신만의 컴포넌트를 2개 만들어서 `App.jsx`에 추가해보세요!

## 마무리 팁

- 컴포넌트 이름은 항상 **대문자**로 시작해야 합니다.
- 하나의 폴더 안에 관련 컴포넌트들을 정리해두면 **관리하기도 편해요.**
- 실습을 마치면 꼭 **직접 브라우저에서 확인**해보세요!