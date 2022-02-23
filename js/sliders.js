$(document).ready(function () {
  $('.auction > .container__auction > .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    stagePadding: 20,
    margin: 25,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
