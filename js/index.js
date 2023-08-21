"Use strict"



//=====================loading until ready =================
$(document).ready(function(){
  $(".loader").fadeOut(500, function(){
    $(".loading").slideUp(500 , function(){
      $("body").css("overflow","auto")
      $(".loading").remove();
   
    })
  })

})



//===============smooth scroll ----------------
$("header a").click(function(eventInfo){
  let aHref = eventInfo.target.getAttribute("href");
  let sectionOffset = $(aHref).offset().top
  $("html , body").animate({scrollTop:sectionOffset},1000)
})



//===================up==========  ????????????
$(window).scroll(function(){
  let windowTop = $(window).scrollTop();
  let section2Offset = $("#duration").offset();
  console.log(windowTop,section2Offset);
  if(windowTop > section2Offset-150 ){
    //===================appear btnUp==========
    $("#btnUp").fadeIn(500);

  }else {
    //===================disappear btnUp==========
    $("#btnUp").fadeOut(500);

  }
})








//==============btnUp============

// $("#btnUp").click(function(){
//   $("html , body").animate({scrollTop:0},1000)
// });








//=========navbar----------------
// At start
let navSideWidth = $(".navInner").innerWidth()
$(".navSide").css ("left ", -navSideWidth) ;


$(".fa-chevron-left").click(function(){
      $(".fa-chevron-right").css("display","block");
      $(".fa-chevron-left").css ("display","none");
      $(".navSide").animate ({left : -navSideWidth} , 1000)
          
});

$(".fa-chevron-right").click(function(){
     $(".fa-chevron-right").css("display","none");
     $(".fa-chevron-left").css ("display","block");
     $(".navSide").animate ({left : "0"} , 1000)
          
});

//============choose color in nav bar
let colorBox = $(".colorBox")
colorBox.eq(0).css("backgrondColor","#f00")
colorBox.eq(1).css("backgrondColor","#a0f")
colorBox.eq(2).css("backgrondColor","#8f0")
colorBox.eq(3).css("backgrondColor","#000")

colorBox.click(function(e){
let spanColor = $(e.target).css("backgroundColor")
console.log(spanColor)
})

//==============section2===============
//at start==========
$(".desc2").css ("display","none");
$(".desc3").css ("display","none");
$(".desc4").css ("display","none");
//====by click
$(".hSing1").click(function(){
  $(".desc1").toggle (700); 
  $(".desc2").css ("display","none");
$(".desc3").css ("display","none");
$(".desc4").css ("display","none"); 
 })
$(".hSing2").click(function(){
  $(".desc2").toggle(700);
  $(".desc1").css ("display","none");
$(".desc3").css ("display","none");
$(".desc4").css ("display","none");
 })
$(".hSing3").click(function(){
  $(".desc3").toggle(700);
  $(".desc2").css ("display","none");
$(".desc1").css ("display","none");
$(".desc4").css ("display","none");
 })
$(".hSing4").click(function(){
  $(".desc4").toggle(700);
  $(".desc2").css ("display","none");
$(".desc3").css ("display","none");
$(".desc1").css ("display","none");
 })


 //=================section conter
 const counter = document.getElementById("counter")
 // Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //if counter of  one number
  seconds = seconds <10 ? `0${seconds}` : seconds;
  minutes = minutes <10 ? `0${minutes}` : minutes;
  hours = hours <10 ? `0${hours}` : hours;
  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days + "D";
  document.getElementById("hour").innerHTML =hours + "h";
  document.getElementById("min").innerHTML = minutes + "m"; 
  document.getElementById("sec").innerHTML = seconds + "s";



  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = "EXPIRED";
  }
}, 1000);











$("textarea").keydown(function(){
  updateCountdown()
})
//============section details=============
$(document).ready(function () {
  $('textarea').on("propertychange keyup input paste",

  function () {
      var limit = $(this).data("limit");
      var remainingChars = limit - $(this).val().length;
      if (remainingChars <= 0) {
          $(this).val($(this).val().substring(0, limit));
      }
      $(this).next('span').text(remainingChars<=0?0:remainingChars);
  });
});
$('.newComment').keyup(updateCountdown);
