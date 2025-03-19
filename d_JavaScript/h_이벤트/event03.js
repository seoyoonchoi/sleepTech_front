window.addEventListener('load', function(){
  console.log('페이지의 모든 콘텐츠가 로드되었습니다');
});

//HTML웹 문서의 구조를 인식한 후 JS기능이 동작되도록 설정하여 안정성을 보장한다
//HTML돔트리 구조 완성 전 JS 기능 사용 시 오류가 난다
window.addEventListener('DOMContentLoaded', function(){
  console.log('DOM트리가 완성되었습니다');
});
