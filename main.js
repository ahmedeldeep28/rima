var swiper = new Swiper('header .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  gsap.to(".left",{
    scrollTrigger:{
      trigger: '.left',
      start: "20% center",
      markers: true,
    },
    x: 0,
    duration:3
  })
  gsap.to(".right",{
    scrollTrigger:{
      trigger: '.right',
      start: "20% center",
      markers: true,
    },
    x: 0,
    duration:3
  })
  // gsap.to(".love1",{
  //   scrollTrigger:{
  //     trigger: '.love1',
  //     start: "top center",
  //     markers: true,
  //   },
  //   x: 0,
  //   duration:2
  // })
  // gsap.to(".love2",{
  //   scrollTrigger:{
  //     trigger: '.love2',
  //     start: "top center",
  //     markers: true,
  //   },
  //   x: 0,
  //   duration:2
  // })
  gsap.to(".text",{
    scrollTrigger:{
      trigger: '.text',
      start: "20% center",
      markers: true,
    },
    scale: 0,
      duration:5
  })
let myheart = document.querySelector(".add");
let textHeart = document.querySelector(".hed");

myheart.onclick = ()=>{
  myheart.classList.add("her")
  textHeart.classList.add("shw")
}