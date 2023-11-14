//이미지 슬라이드
window.onload = function(){
  let picture = ["images/header0.jpg", "images/header1.jpg",
  "images/header2.jpg"];
  let picIdx = 0;

showSlide();

function showSlide(){
  document.getElementById("pic").src = picture[picIdx];
  picIdx += 1;
  if(picIdx == picture.length){
    picIdx = 0;
  }
  setTimeout(showSlide, 2000);
  }
}


setInterval(myWatch, 1000);

function myWatch(){
   const now = new Date();
   let time = now.toLocaleTimeString(); //시간만 출력
   console.log(time);

   let watch = document.getElementById("demo")
   watch.innerHTML = time;
   watch.style.color = "#819ca7;";
}