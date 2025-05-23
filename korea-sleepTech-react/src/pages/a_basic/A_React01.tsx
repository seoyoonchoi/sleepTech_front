export const tmp = '';

//? 리액트는 typemodule의 ES6의 모듈 시스템을 사용하기 때문에 모든 파일 단위가 모듈로서 export 되어야 한다.
//!비워놓으면 오류남!!

// 리액트는 화면만 만든다.리액트는 라이브러리다.

//! A_React01.tsx
//? cf) 리액트는 type=module의 ES6 모듈 시스템을 사용하기 때문에 
//      , 모든 파일 단위가 모듈로써 export 되어야 함!

/*
# === React 개요 === #
! 1. React 정의
: 사용자 인터페이스(User Interface, UI)를 구축하기 위한 자바스크립트 '라이브러리'

2. 프레임워크 VS 라이브러리
? 프레임워크(frame틀 + work일하다)
- 전체적인 시스템
- 프레임워크가 개발자를 제어한다.
: 일정한 형태와 기능을 갖추고 있는 기반 구조
: 뷰 레이어, 모델, 컨트롤러 등이 하나의 프레임워크에 담김

? 라이브러리
- 특정 기능을 수행하는 코드의 집합, 개발자가 필요에 따라 선택적으로 사용 가능
- 개발자가 라이브러리를 제어한다.
: 단순 활용 가능한 도구들의 집합
: React, 애플리케이션의 '뷰 레이어'에만 집중
: 개발자가 모델, 컨트롤러는 외부 라이브러리에서 가져와서 사용

3. React 특징
? 선언적 뷰
: 명시적, 직관적으로 UI의 "상태"를 기술, 해당 상태에 따라 자동으로 업데이트
- 페이지의 상태가 변할 때 마다 React가 자동으로 화면을 최신 상태로 갱신

? '컴포넌트' 기반
: UI를 독립적으로 재사용 가능한 여러 컴포넌트로 분리하여 사용
: 각각의 컴포넌트가 자신의 상태를 관리
- 대규모 애플리케이션 개발과 유지 관리에 효율

? Virtual DOM (가상돔)
: 실제 DOM 보다 빠르게 작동하는 가상돔을 사용, 성능을 최적화

? JSX
: JS와 HTML을 결합한 JSX 문법을 사용하여 구성요소의 구조를 쉽게 작성

! SPA와 React

4. SPA(Single Page Application)
: 전체 페이지를 새로 고침하지 않고도 사용자와 상호 작용에 반응하여
: 동적으로 콘텐츠를 업데이트하는 것을 목표로 하는 웹 애플리케이션 접근 방식

? '리액트'를 사용한 SPA 구현
- 가상 돔: 페이지 전체를 새로 고침하지 않고 필요한 부분만 업데이트
- 라우팅: 페이지 간의 전환을 'React Router' 라이브러리를 통해서 구현
*/