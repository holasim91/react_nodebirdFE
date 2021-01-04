# NodeBird FE Part

# NextJS
    next에는 react-hot-loader가 적용되어 있어서 자동으로 새로고침이 된다
    
    
# Ant Design
    일본에서 고통받았던 그것. 
    https://ant.design/ 에서 자세한 것 확인하기
    Form태그의 onFinish는 자동으로 e.preventDefault()가 적용되어있다.()

# 반응형
    프론트 화면을 개발할 때에는 무조건 모바일 화면부터 디자인하고 점점 늘려라.
    반대로하면.. 헬게이트 오픈!
    gutter: 컬럼사이 너무 딱 붙어있지 않게 간격을 주는 것

# Component Container나누기
    예전에는 순수하게 화면만 보여주는 곳을 Component, 데이터를 다루는 컴포넌트는 Container로 나누었으나 hooks가 도입되면서 리액트 공식팀에서 그 둘을 나누는 것을 추천하지 않는다.

# Link/Next
    Link에 href에 넣는게 좋다 a에는 넣지 말구

# useCallback
    컴포넌트에 함수를 넘겨주는 경우 꼭 사용해라

# CSS Inline-Style
    안하는게 좋다.

    ```javascript
        {} === {} //false 이기 떄문에 불필요한 렌더링이 발생하기 때문

    ```
    따라서 Styled-Components를 사용해서 스타일링을 하자
# 리렌더링
    Virtual Dom이 최초 렌더링 된것과 비교해서 다른 것이 있을 때 그것만 다시 그린다.
    함수형 컴포넌트에서 리렌더링이 된다고 함은 함수 안의 부분이 전부 다시 실행되는 것이 맞다.
    근데, useCallback에서 두번째 인자로 받는 (배열 안) 것이 바뀌지 않는이상 같은 것으로 친다(캐싱이니까).
    리턴 부분 안에서 바뀐 것만 다시 실행됨
    

# useCallback VS UseMemo
    useCallback은 함수를 캐싱하고, useMemo는 값을 캐싱한다.
    