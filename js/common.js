$(function() {

	// Custom JS
$('.slick-track').slick({
	slidesToShow: 17,
	slidesToScroll: 4,
  arrows: true,
  // nextArrow: '<i class="fa fa-arrow-right"></i>',
  // prevArrow: '<i class="fa fa-arrow-left"></i>',
  // arrows: true,
  // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  // nextArrow: '<span class="glyphicon glyphicon-search"></span>',
  // prevArrow: '<span class="glyphicon glyphicon-search"></span>',

	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 2,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slick-track.ff').slick({
	slidesToShow: 8,
	slidesToScroll: 1,
});
$('.slick-track.dd').slick({
	slidesToShow: 10,
	slidesToScroll: 1,
});
$('.slick-track.ee').slick({
	slidesToShow: 8,
	slidesToScroll: 1,
});
$('.slick-track.cc').slick({
	slidesToShow: 12,
	slidesToScroll: 1,
});
$('.slick-track.qq').slick({
	slidesToShow: 12,
	slidesToScroll: 1,
});
$('.slick-track.gg').slick({
	slidesToShow: 12,
	slidesToScroll: 5,
});
});
