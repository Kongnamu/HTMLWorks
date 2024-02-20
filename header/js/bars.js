//자바스크립트로 구현
// let toggleBtn = document.querySelector(".navbar_toggleBtn");
// let menu = document.querySelector(".navbar_menu");

// //버튼 눌렀을때 이벤트 발생
// toggleBtn.addEventListener('click', function(){
//   //active라는 이름의 클래스를 추가/삭제 모두 가능한 toggle 생성
//   menu.classList.toggle("active");
// })

//제이쿼리로 구현
$(document).ready(function(){
  // alert("test..");
  //toggle() - show(), hide() / toggleClass()도 있음
  $(".navbar_toggleBtn").click(function(){
    $(".navbar_menu").toggle("active");
  });

  //pc기준에서 상단 메뉴가 보이지 않을때 처리
  $(window).resize(function(){
    if(parseInt($("nav").css("width")) > 768){
      $(".navbar_menu").css("display", "flex");
    }else{
      $(".navbar_menu").css("display", "none");
    }
  })
})

