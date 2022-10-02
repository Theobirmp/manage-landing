//create 3 slides for desktop and one for mobile and small tablets
  window.addEventListener('load', function(event) {
    let width=this.document.documentElement.clientWidth
    noOfSlides=3
    //768 px is the md breakpoint
    if(width<1024) noOfSlides=2
    if(width<768) noOfSlides=1
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView:noOfSlides,
        autoplay:true,
        speed:1000,
        loop: true,
        spaceBetween:25
      });
});