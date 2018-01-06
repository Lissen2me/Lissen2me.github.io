/** 
 *------------------------------------------------------------------------------
 * @package       Agnes for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2014 iThemesLab. All Rights Reserved.
 * @authors       iThemesLab
 * @Google group: 
 * @Link:         
 *------------------------------------------------------------------------------
 */
 jQuery(function($) {
 $(window).on('scroll', function() {
    if ($(window).scrollTop() > 130) {
      $('#t3-header').addClass('navbar-fixed-top');
      $('#back-to-top').addClass('reveal');
      $('.logo-image').css('margin-top', '0');
    }
    else {
      $('#back-to-top').removeClass('reveal');
      $('#t3-header').removeClass('navbar-fixed-top');
      $('.logo-image').css('margin-top', '12px');
    }
  });

 //Tooltipster
  $('.tooltip-on').tooltipster({
    animation: 'fade',
    arrow: true,
    arrowColor: '',
    content: '',
    delay: 100,
    fixedWidth: 0,
    maxWidth: 0,
    functionBefore: function(origin, continueTooltip) {
      continueTooltip();
    },
    functionReady: function(origin, tooltip) {
    },
    functionAfter: function(origin) {
    },
    icon: '(?)',
    iconDesktop: false,
    iconTouch: false,
    iconTheme: '.tooltipster-icon',
    interactive: true,
    interactiveTolerance: 150,
    offsetX: 0,
    offsetY: 0,
    onlyOne: true,
    speed: 150,
    timer: 0,
    theme: '.tooltipster-default',
    touchDevices: false,
    trigger: 'hover',
    updateAnimation: true
  });

  $(' .sprocket-mosaic ul > li').each( function() { $(this).hoverdir(); } );
  $(' .sprocket-mosaic').on('itl.mosaic.loaded', function(){
    $(' .sprocket-mosaic ul > li').each( function() { $(this).hoverdir(); } );
  });
});

(function($){
    $(document).ready(function(){
              // back to top
		(function(){
			$('#back-to-top').on('click', function(){
				$('html, body').stop(true).animate({
					scrollTop: 0
				}, {
					duration: 800, 
					easing: 'easeInOutCubic',
					complete: window.reflow
				});
 
				return false;
			});
		})();
    });
  })(jQuery);
  
var wow = new WOW( {
  boxClass:     'play',      // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset:       60,          // distance to the element when triggering the animation (default is 0)
  mobile:       false        // trigger animations on mobile devices (true is default)
} );
wow.init();