function bgChange(event){
  const randomNumber = Math.floor(Math.random()*256);
  const randomColor = `rgb(${randomNumber},${randomNumber},${randomNumber})`;
  event.target.style.backgroundColor = randomColor;
}

/*이벤트 객체를 전달받아 이벤트가 발생된 요소의 배경을 변경하는 메서드.
event.target
event.target은 html요소이다.

//#이벤트 객체
이벤트 핸들러가 호출될때 브라우저가 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에게 전달한다.
이벤트와 관련된 다양한 속성과 메서드가 포함된다.
 */

//# 1. 타입
//: 이벤트 유형 지정을 한다(click, change 등)
//# 2. target
//: 이벤트가 발생한 요소를 참조한다.
//실질적으로 이벤트가 발생한 요소이다.
//이벤트 발생 시 변경을 적용할 요소를 결정하는데 유용하게 쓰임
//# 3. currentTarget
//이벤트 리스너가 실제로 첨부된 요소를 참조한다.
//# 4. preventDefault()
//브라우저가 해당 이벤트에 대해 기본적으로 수행하는 동작을 방지한다
//# 5. stopPropagation()
//이벤트가 전파되는 것을 방지한다.

//# +)
//ex) 마우스 이벤트 - 마우스의 위치(좌표)나 버튼 상태 등
//ex) 키보드 이벤트 - 눌려진 키에 대한 정보를 포함할 것

//? 이벤트 객체 사용하는 방법
//이벤트가 발생하는 함수(이벤트 핸들러)에 매개변수로 자동전달
//매개변수명 event evt e 등으로 명명을 권장한다.

const colorChangeButton = document.querySelector('#colorChangeButton');
colorChangeButton.addEventListener('click',bgChange);
const divs = document.querySelectorAll('.colorDiv');
divs