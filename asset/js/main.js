$(function(){


$('.btn-menu').click(function(){
      $('.all-nav').toggle()
})

$('.header .gnb-item').hover(function(){
   $(this).find('.sub-list').addClass('active');
   $('.header').addClass('menu-active');
},function(){
   $('.sub-list').removeClass('active');
   $('.header').removeClass('menu-active');

})


$('.btn-menu').click(function(){
   $('.btn-menu, .dimmed').toggleClass('active')
})







/**
 * 
 * 메인 슬라이드 소스
 */


 var slide1 = new Swiper(".main-slide", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },


   autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },

   pagination: {
      el: ".swiper-pagination",
    },

});

// slide1.autoplay.stop()
// slide1.autoplay.start();

$('.main-slide .autoplay').click(function(){
   if($(this).find('.blind').text() == '자동재생 적용') {
      slide1.autoplay.start();
      $(this).find('.blind').text('자동재생 정지')
      $(this).removeClass('active');
   } else {
      slide1.autoplay.stop();
      $(this).find('.blind').text('자동재생 적용')
      $(this).addClass('active');
   }
})



slogan = gsap.timeline({

   scrollTrigger:{
      trigger:".sc-slogan",
      start:"top top", //트리거시작지점, 윈도우시작지점 둘이 만나면 시작
      // end:"bottom 10%",//트리거끝지점, 윈도우시작지점 둘이 만나면 시작
      end:"+=300%",//트리거끝지점, 윈도우시작지점 둘이 만나면 시작
      // markers:true,
      scrub:1,
      pin:true,
   },
})

slogan.to('.sc-slogan .bg',{ scale:20,})
.to('.sc-slogan',{'background-color': '#052460'})
.to('.sc-slogan .rect',{display:'block',opacity:1,stagger:0.2})

.to('.sc-slogan .text-box',{
   display:'block',opacity:1,
})



gsap.to('.sc-intro .content',{
   scrollTrigger:{
      trigger:".sc-intro .content",
      start:"top bottom", //트리거시작지점, 윈도우시작지점 둘이 만나면 시작
      // end:"bottom 10%",//트리거끝지점, 윈도우시작지점 둘이 만나면 시작
      end:"top 30%",
      // markers:true,
      scrub:5,
      
   },

   scale:1
})

gsap.set('[data-fadeUp]',{opacity:0,y:100})
$('[data-fadeUp]').each(function(i,el){  
   gsap.to(el,{
      scrollTrigger:{
         trigger:el,
         start:"top 80%", //트리거시작지점, 윈도우시작지점 둘이 만나면 시작
         // end:"bottom 10%",//트리거끝지점, 윈도우시작지점 둘이 만나면 시작
         end:"bottom 70%",
         // markers:true,
         // scrub:5,
      },
      opacity:1,
      y:0
   })
})
gsap.set('[data-fadeStagger] *',{opacity:0,y:100})
$('[data-fadeStagger]').each(function(i,el){  
   child = $(this).find('>*');
   gsap.to(child,{
      scrollTrigger:{
         trigger:el,
         start:"top 80%", //트리거시작지점, 윈도우시작지점 둘이 만나면 시작
         // end:"bottom 10%",//트리거끝지점, 윈도우시작지점 둘이 만나면 시작
         end:"bottom 70%",
         // markers:true,
         // scrub:5,
      },
      opacity:1,
      y:0,
      stagger:0.1,
   })
})









/**
 * 
 * 
 * business
 * 
 */

 var businessSlide = new Swiper(".business-slide", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,

});



$('.business-category a').click(function(e){
   e.preventDefault();

   idx = $(this).data('go');

   $(this).addClass('active').siblings().removeClass('active');
   businessSlide.slideTo(idx)
})


businessSlide.slideTo(1)

/**
 * 
 * 
 * 
 * pr
 * 
 */
 var prSlide = new Swiper(".pr-slide", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
   });

$('.pr-category a').click(function(){

   ids = $(this).attr('href');

   $(this).addClass('active').siblings().removeClass('active')
   $(ids).addClass('active').siblings().removeClass('active')
})

prSlide.slideTo(1)
});



 
