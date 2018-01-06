	function fileval (filevalue) {
		filevalF = filevalue.split("\\"); //разделяем строку на массив.
	}

	$(document).ready(function() {

        const mobile = 1;
        const tablet = 2;
        const desctop = 3;
        const runtimeEvent = 1;

        var current_resolution = 0;
        // small tablet resolution and mobile
        var m_r = 450;
        // tablet resolution
        var t_r = 800;

        //console.log($(".root-item-selected").parent().find(">.menu-plus"));

        //$("a.root-item-selected").nextAll("ul").toggle(150,function() {
        //    //if($(this).next(".menu-plus").html()=='<i class="icon-plus"></i>'){
        //    //    $(this).next(".menu-plus").('<i class="icon-minus">');
        //    //}
        //    //else {
        //    //    $(this).next(".menu-plus").('<i class="icon-plus"></i>');
        //    //}
        //});
        //$(".item-selected").nextAll("div>ul").show();

        //
        // Mask okna preload for mobile
        //
        function response_mask(resolution){

            if($(".okna_link").length) {

                var offset_top = 1;
                var oknablock_in = $(".oknablock_in");
                var offset_mask = oknablock_in.offset();
                var length_tabs = oknablock_in.length;

                //oknablock_in.each(function() {
                //    var append = $( this ).offset();
                //    var top = parseInt(append.top);
                //    //alert(window.response_mask.offset_top);
                //});

                //alert(offset_top);
                switch (resolution){
                    case mobile:

                        if(!$(".image-mask").length) {
                            $(".prodescode__content").append(
                                "<div class='image-mask'>" +
                                "<div class='image-mask__item' style='top:0px;left:-10px'>1</div>" +
                                "<div class='image-mask__item' style='top:65px;left:-10px'>2</div>" +
                                "<div class='image-mask__item' style='top:125px;left:-10px'>3</div>" +
                                "<div class='image-mask__item' style='top:5px;right:-10px'>4</div>" +
                                "<div class='image-mask__item' style='top:80px;right:-10px'>5</div>" +
                                "</div>"
                            );
                        }

                        $(".image-mask").css({
                            "width" : "280px",
                            "height" : "350px",
                            "top": offset_mask.top + "px",
                            "left" : "50%",
                            "margin-left" : "-140px"
                        });
                        break;
                    case tablet:

                        if(!$(".image-mask").length) {
                            $(".prodescode__content").append(
                                "<div class='image-mask'>" +
                                "<div class='image-mask__item' style='top:0px;left:-7px'>1</div>" +
                                "<div class='image-mask__item' style='top:65px;left:-7px'>2</div>" +
                                "<div class='image-mask__item' style='top:125px;left:-7px'>3</div>" +
                                "<div class='image-mask__item' style='top:5px;right:-10px'>4</div>" +
                                "<div class='image-mask__item' style='top:80px;right:-10px'>5</div>" +
                                "</div>"
                            );
                        }

                        $(".image-mask").css({
                            "width" : "280px",
                            "height" : "350px",
                            "top": offset_mask.top + "px",
                            "left" : "0",
                            "margin-left" : "15px"
                        });
                        break;
                    case desctop:
                        if($(".image-mask").length) {
                            $(".image-mask").remove();
                        }
                        break;
                }


                //$(".image-mask").top(200);
                //$(".image-mask").right(10);
            }
        }

        //
        // on change resolution calculator move blocks
        //
        function response_calculator(resolution){
            if($(".calculator").length) {
                if($(".calculator_okna").length){
                    //alert(offset_top);
                    switch (resolution){
                        case mobile:
                            var pdiv = $(".choice-info");
                            pdiv.insertAfter($(".choice-info__separator"));
                            var bdiv = $(".choice-info__tipokna");
                            bdiv.insertBefore($(".choice-info__separator"));
                            break;
                        case tablet:
                            var pdiv = $(".choice-info");
                            pdiv.insertAfter($(".choice-info__separator"));
                            var bdiv = $(".choice-info__tipokna");
                            bdiv.insertBefore($(".choice-info__separator"));
                            break;
                        case desctop:
                            var pdiv = $(".choice-info");
                            pdiv.insertBefore($(".choice-info__separator"));
                            var bdiv = $(".choice-info__tipokna");
                            bdiv.insertAfter($(".choice-info__separator"));
                            break;
                    }
                }
                else {
                    //alert(offset_top);
                    switch (resolution){
                        case mobile:
                            var pdiv = $(".choice-info__gallery");
                            pdiv.insertBefore($(".choice-info"));
                            break;
                        case tablet:
                            var pdiv = $(".choice-info__gallery");
                            pdiv.insertBefore($(".choice-info"));
                            break;
                        case desctop:
                            var pdiv = $(".choice-info");
                            pdiv.insertBefore($(".choice-info__gallery"));
                            break;
                    }
                    return false;
                }

            }
        }
        function response_calculator_popups(resolution) {
            if($(".calculator_okna").length) {
                //alert($(".tipokna1").offset().left);
                if(resolution == desctop){
                    $(".popok1").css({
                        "left": 18
                    });
                    $(".popok2").css({
                        "left": 95
                    });
                    $(".popok3").css({
                        "left": 203
                    });
                    $(".popok4").css({
                        "left": 348
                    });
                }
                else{
                    $(".popok1").css({
                        "left": $(".tipokna1").offset().left - 40
                    });
                    $(".popok2").css({
                        "left": $(".tipokna2").offset().left - 35
                    });
                    $(".popok3").css({
                        "left": $(".tipokna3").offset().left - 20
                    });
                    $(".popok4").css({
                        "left": $(".tipokna4").offset().left - 40
                    });
                }
            }
        }

        //
        // resolution document
        // return const (mobile, tablet, desctop)
        //
         function get_resolution(){

            var cur_res = 0;
            var current_with = $(document).width();

            if(current_with < m_r) cur_res = mobile;
            if(current_with >= m_r && current_with < t_r) cur_res = tablet;
            if(current_with >= t_r) cur_res = desctop;

            return cur_res;
        }


        function change_resolution(runtime){

            var init_resolution = get_resolution();

            if (init_resolution == current_resolution && !runtime){
                return false;
            }
            else {
                current_resolution = init_resolution;
                switch (current_resolution){
                    case mobile:
                        _init_content(mobile);
                        response_calculator_popups();
                        break;
                    case tablet:
                        _init_content(tablet);
                        response_calculator_popups();
                        break;
                    case desctop:
                        _init_content(desctop);
                        response_calculator_popups(desctop);
                        close_menu_mobile();
                        break;
                    default:
                        return false;

                }
            }

        }

        //
        // agregate preload with resolution
        //
        function _init_content(resolution){
            response_mask(resolution);
            response_calculator(resolution);
        }

        //
        // browser event listner
        //
        $(window).load(function () {
            change_resolution();
        });
        $(window).resize(function(){
            if(current_resolution == mobile || current_resolution == tablet)
                if($(".okna_link").length){
                    change_resolution(runtimeEvent);
                }
                else{
                    change_resolution();
                }

            else
                change_resolution();
        });

        $('.laminat-main__slider').owlCarousel({
            loop:true, //Зацикливаем слайдер
            margin:15, //Отступ от картино если выводите больше 1
            nav:true, //Отключил навигацию
            navText : ['<div class="gallery__prev"></div>','<div class="gallery__next"></a>'],
            responsive:{ //Адаптация в зависимости от разрешения экрана
                0:{
                    items:2
                },
                768:{
                    items:4
                },
                1024:{
                    items:6
                }
            }
        });

        $('.low-price-cold .low-price-main__container').owlCarousel({
            loop:true, //Зацикливаем слайдер
            itemElement:'low-price-main__item',
            margin:15, //Отступ от картино если выводите больше 1
            nav:false, //Отключил навигацию
            navText : ['<div class="gallery__prev"></div>','<div class="gallery__next"></a>'],
            responsive:{ //Адаптация в зависимости от разрешения экрана
                0:{
                    items:1
                },
                768:{
                    items:1
                },
                1024:{
                    items:2
                }
            }
        });


		$("#slider-ok").easySlider({
			auto: false,
			pause:  1000,
			continuous: true,
			numeric: false
		});




        $(".menu-plus").click(function() {
            $(this).next("div>ul").toggle(150);
            if($(this).html()=='<i class="icon-plus"></i>'){
                $(this).html('<i class="icon-minus">');
            }
            else {
                $(this).html('<i class="icon-plus"></i>');
            }
        });

        //$(".menu-plus").click(function() {
        //    $(this).next("div>ul").toggle(150);
        //});


        $(".root-item-selected").parent().find(">.menu-plus").trigger( "click" );
        $(".item-selected > .sub_menu > .menu-plus").trigger( "click" );

        var toogle = false;
        var speed = 300;

        //
        // Event mobile menu
        //

        function open_menu_mobile(){
            if(!toogle){
                $("body").css({"position":"fixed"});
                $("body").animate({"margin-left": "-=255" }, speed);
                $(".header__mobile-menu-wrap").animate({right: "+=255" }, speed);
                //$( "body" ). анимировать появление меню
                toogle = true;
                return false;
            }
        }
        function close_menu_mobile(){
            if(toogle){
                $("body").css({"position":"static"});
                $(".header__mobile-menu-wrap").animate({right: "-=255"}, speed);
                $("body").animate({"margin-left": "+=255" }, speed);
                toogle = false;
                return false;
            }
        }
        function toogle_menu_mobile(){
            if(!toogle){
                open_menu_mobile();
                return false;
            }
            else {
                close_menu_mobile();
                return false;
            }
        }
        //$( ".site__content" ).click(function(event) {
        //    event.preventDefault();
        //    close_menu_mobile();
        //});

        $( "body" ).on("swiperight", function() {
            close_menu_mobile();
        });
        $( ".site__content" ).on("tap", function() {
            close_menu_mobile();
        });
        //$( ".site__content" ).on("swipeleft", function() {
        //    open_menu_mobile();
        //});

        /* mobile menu collapser */
        $( ".collapse-button" ).click(function() {
            toogle_menu_mobile();
        });

        $("#slider-ok").easySlider({
            auto: false,
            pause:  1000,
            continuous: true,
            numeric: false
        });
		/* start right fly girl */
			$('.header')
			.waypoint( function(dir) {
				if (dir === 'down')
				$('.prozamer2').addClass('animated').removeClass('slideOutRight').toggleClass('slideInRight');
			},{
			offset:-400
			})
			.waypoint( function(dir) {
				if (dir === 'up')
				$('.prozamer2').addClass('animated').removeClass('slideInRight').toggleClass('slideOutRight');
			},{
			offset:-399
			});

			$('.footer')
			.waypoint( function(dirbot) {
				if (dirbot === 'down')
				$('.prozamer2').addClass('animated').removeClass('slideInRight').toggleClass('slideOutRight');
			},{
			offset:1000
			})
			.waypoint( function(dirbot) {
				if (dirbot === 'up')
				$('.prozamer2').addClass('animated').removeClass('slideOutRight').toggleClass('slideInRight');
			},{
			offset:1000
			});



			$(".prozamer2").click(function () {
				$(".scchasgrey2").css("display","block");
			});

			$(".scchasblockclose2").click(function () {
				$(".scchasgrey2").css("display","none");
			});
		/* end right fly girl */


		$(".fancy").fancybox({
            autoSize	: true,
            autoDimensions    : true,
            helpers: {
                overlay: {
                    locked: false
                }
            }
		});

        $("#form5_otz").click(function (e) {
            e.preventDefault();
            var name = $("#fio_otz").val();
            var text = $("#mess_otz").val();
            var today = new Date();
            var months = [
                'Января',
                'Февраля',
                'Марта',
                'Апреля',
                'Мая',
                'Июня',
                'Июля',
                'Августв',
                'Сентября',
                'Октября',
                'Ноября',
                'Декабря'
            ];
            var dd = today.getDate();
            var mm = today.getMonth(); //January is 0!
            var yyyy = today.getFullYear();
            today = dd+' '+ months[mm] +' '+yyyy;
            var otz = {
                name:name,
                text:text,
                date:today
            };
            var all_cookie = JSON.parse($.cookie('otziv'));
            if(all_cookie){
                all_cookie.push(otz);
            }
            else {
                all_cookie = [otz];
            }
            $.cookie('otziv', JSON.stringify(all_cookie), { expires: 365 });
            $('#form_add_resp').find('form').submit();
        });

        var list = $('.fleft');
        if(list.length>0){
            var dump_rev = JSON.parse($.cookie('otziv'));
            var append_rev = "";
            if(dump_rev != null){
                dump_rev.reverse();
                $.each(dump_rev, function (k, v) {
                    append_rev += '<div class="respItem">'+
                        '<div class="respName">'+v.name+'</div>' +
                        '<div class="respDate"> '+v.date+'</div>'+
                        '<p>'+v.text+'</p></div>';
                });
                list.prepend(append_rev);
            }

        }


        //$(".fancy").click(function () {
        //    Comagic.openSitePhonePanel();
        //});

		$(window).load(function () {
			thisLinkId = window.location.hash; //получаем хэш из адресной строки
		  	$(thisLinkId).trigger("click"); //эмулируем клик по соответствующему ID
		});

		$(".custom-form input[type='file']").addClass("remove").parent().addClass("custom-file"); //убираем стандартный инпут и добавляем родительскому блоку класс
		$(".custom-file").append('<input type="text" id="file-input" /><a href="#" id="file-but"><span>Прикрепить&nbsp;</span><span>файл</span></a>'); //вставляем html-код для кастомизации инпута
		$("#file-but, #file-input").on("click", function(){ //навешиваем клик на форму input для вызова формы загрузки файла
			$(".custom-form input[type='file']").trigger("click");
			return false;
		});
		$(".custom-form input[type='file']").change(function () { //получаем значение value из инпута
			fileval(this.value);
		}).change();

		$(".custom-form input[type='file']").change( function(){ // Защита, чтоб не пытались менять выводимое значение.
			$("#file-input").attr("value", filevalF[filevalF.length -1]);  //берём последнюю строку из массива, чтобы не было видно fakepath.
		});


		function get_summ(){
	        	var stek_price = $('.tipstek a.active').data('price');
	        	var roof_price = $('.roof a.active').data('price');
	        	var mat_price = $('.mat a.active').data('price');
	        	var shkaf_price = $('.shkaf a.active').data('price');
	        	var floor_price = $('.floor a.active').data('price');

	        	var summ = stek_price+roof_price+mat_price+shkaf_price+floor_price;
	        	var summ2 = summ/10;
	        	$("#cena").html(summ);
	        	$("#rass").html(summ2);
		}

		get_summ();

	    $('.pol2 a').on({
	        'click': function(event){
	        	var $t = $(this);
	        	var $t_id = $(this).attr('id');
	        	var $t_price = $(this).data('price');
	        	var $t_show = $(this).data('show');

	        	$t.parent().children().removeClass("active");
	        	$t.addClass("active");

	        	get_summ();

				if ($('#roof1').hasClass('active')) $('#roof1_1, #roof1_2').hide();
				if ($('#roof2').hasClass('active')) {$('#roof1_2').hide();$('#roof1_1').show();}
				if ($('#roof3').hasClass('active')) {$('#roof1_1').hide();$('#roof1_2').show();}

	        	if ($('#stek1').hasClass('active'))  $($t_show).hide();
	        	else if ($('#stek2').hasClass('active')) $($t_show).show();


				if ($t.parent().hasClass('mat')){
					$('#otdelka2').hide(); $('#otdelka3').hide();

					if ($t.hasClass('right')) $('#otdelka2').show();
					if ($t.hasClass('cent')) $('#otdelka3').show();
	//				if ($t.hasClass('right')) $('#otdelka3').show();

					if ($('.shkaf .cent').hasClass('active')){
						$('#shkaf1_1, #shkaf1_3').hide();
						if ($t.hasClass('left')) {
							$('#shkaf1_3').show();
						}
						else if ($t.hasClass('cent')) {
							$('#shkaf1_3').show();
						}
						else if ($t.hasClass('right')) {
							$('#shkaf1_1').show();
						}
					}
				}

				if ($t.parent().hasClass('shkaf')){
					$('#shkaf1_1, #shkaf1_3').hide();

					if ($t.hasClass('left'))
						 $('#shkaf1_1, #shkaf1_3').hide();
					else{
						if ($('.mat .left, .mat .cent').hasClass('active')) {
							$('#shkaf1_3').show();
						}
						else if ($('.mat .right').hasClass('active')) {
							$('#shkaf1_1').show();
						}
					}

				}

				if ($t.parent().hasClass('floor')){
						$('#floor1, #floor2').hide();
						if ($('.floor a.left').hasClass('active')) $('#floor1').show();
						if ($('.floor a.cent').hasClass('active')) $('#floor2').show();
						if ($('.floor a.right').hasClass('active')) $('#floor1, #floor2').hide();
				}

	        	event.preventDefault();
	        }
	    });

	});




$(function(){


/*
    $("#callto").on("click", function(){
        $("#forma5").slideDown("slow").css("top", "auto");
        return false
    });

    $(".kupit").on("click", function(){
        $("#forma5").slideDown("slow").css("top", "980px");
        return false
    });


    $(".discount-order").on("click", function(){

            var el = $('#discount-order').fadeIn(300);
            el.css({
                "top": $(window).scrollTop() + $(window).height()/2 - el.innerHeight()/2,
                "left": $(window).width()/2 - el.innerWidth()/2
            })

        return false
    });

    $(".discount-order2").on("click", function(){

            var el = $('#discount-order2').fadeIn(300);
            el.css({
                "top": $(window).scrollTop() + $(window).height()/2 - el.innerHeight()/2,
                "left": $(window).width()/2 - el.innerWidth()/2
            })

        return false
    });

    $(".close").on("click", function(){
        $(".forma1").slideUp();
        return false
    });
*/
    $("#zamerto").on("click", function(){
        $("#zamer").trigger("click");
        return false;
    });



/*
    $("#zamer, .zamer").on("click", function(){
        $("#forma2").slideDown("slow");

        var destination = $("#forma2").offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);

        return false
    });*/
    $(".close").on("click", function(){
        $("#forma2").slideUp();
        return false
    });

    $( '.advertisement' ).each( function(){
        new Advertisement( $( this ) );
    } );
    $( '.gallery' ).each( function(){
        new Gallery( $( this ) );
    } );

    if ($('.slider4').length) {
        if($(window).width()<768){
            $('.slider4').bxSlider({
                slideWidth: 322,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                slideMargin: 0
            });
        }
        else {
            $('.slider4').bxSlider({
                slideWidth: 322,
                minSlides: 6,
                maxSlides: 6,
                moveSlides: 1,
                slideMargin: 0
            });
        }

    }

    $( window ).resize(function() {
        if ($('.slider4').length) {
            if($(window).width()<768){
                $('.slider4').bxSlider({
                    slideWidth: 322,
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 1,
                    slideMargin: 0
                });
            }
            else {
                $('.slider4').bxSlider({
                    slideWidth: 322,
                    minSlides: 6,
                    maxSlides: 6,
                    moveSlides: 1,
                    slideMargin: 0
                });
            }

        }
    });


    //.....google-map.....//
    if ($('#map_canvas').length) {
        function initialize() {
            var myLatlng = new google.maps.LatLng(55.74,37.52);
            var mapOptions = {
                zoom: 15,
                center: myLatlng
            };
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Hello World!'
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    }
    //...../google-map.....//

    var sharesTittle = $('.company-shares h2'),
        sharesText = $('.company-shares p'),
        sharesPropouse = $('.shares-propouse li'),
        sharesImg = $('.shares-propouse li div img'),
        girlImg = $('.compant-propose > img'),
        requisites = $('.contacts__requisites'),
        generalForm = $('.general-director form'),
        titleMoove = $('.plastic-window__inner > h1'),
        familyMoove = $('.plastic-window__family'),
        showList = $('.glazing__list li'),
        discount = $('.plastic-window__discount'),
        generalTitle = $('.general-director h2');

    if ( ! $('.plastic-window__inner > h1').length ) {
    	titleMoove = $('.plastic-window__inner > h2');
    }

    if ( ! $('.plastic-window__inner > h2').length ) {
    	titleMoove = $('.plastic-window__inner > div.moove_title');
    }

    new Animation(sharesTittle,sharesText,girlImg,sharesPropouse,sharesImg,requisites,generalTitle,generalForm,titleMoove,familyMoove,showList,discount)

    if ( $('.timer-wrap').length ) {

        targetDate(parseTime());

    	$('.timer-wrap').countDown({
            targetDate: parseTime(),
            omitWeeks: true
        });
    }

    // Get Day and Month end of countdown
    function targetDate(obj) {
        /*
         * @param {object}
         */
        var arrMonth = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

        $('#countdown-date').text(obj.day);
        $('#countdown-month').text(arrMonth[obj.month - 1]);
    }

    // Отсчет с понедельника по воскресенье
    function parseTime(){
        var date = new Date(),
            dateDate = date.getDate(),
            dateDay = date.getDay(),
            obj = {};

        date.setDate((dateDay !== 0) ? dateDate + (7 - dateDay) : dateDate);

        obj.day = date.getDate();
        obj.month = date.getMonth() + 1;
        obj.year = date.getFullYear();

        obj.hour = 23;
        obj.min = 59;
        obj.sec = 59;

        return obj;
    }

    /*function parseTime(){
        var nowDate = new Date(),
            nextMonth = new Date(nowDate.getFullYear(), nowDate.getMonth()+1, 1),
            dayCount = new Date(nextMonth-8640000),
            obj = {};

        if (nowDate.getDate() < 16) {
            nowDate.setDate(15);
            obj.day = nowDate.getDate();
            obj.month = nowDate.getMonth() + 1;
            obj.year = nowDate.getFullYear();
        } else {
            nowDate.setDate(dayCount.getDate());
            obj.day = nowDate.getDate();
            obj.month = nowDate.getMonth() + 1;
            obj.year = nowDate.getFullYear();
        }

        obj.hour = 23;
        obj.min = 59;
        obj.sec = 59;

        return obj;
    }*/

    $('.moove-img').on({
        mousemove: function( e ){
            var x = -( ( e.pageX - ( $(window).width() / 2 ) ) / ( $(window).width() / 2 ) ) * 20,
                y = -( ( e.pageY - ( $(window).height() / 2 ) ) / ( $(window).height() / 2 ) ) * 20 ;

            $(this).find('.moving-el').css({
                'transform': 'translate(' + x + 'px,' + y + 'px)',
                '-webkit-transform': 'translate(' + x + 'px,' + y + 'px)',
                '-o-transform': 'translate(' + x + 'px,' + y + 'px)',
                '-moz-transform': 'translate(' + x + 'px,' + y + 'px)'
            });
        }
    })

    $('.header__order').on({
        click: function(){
            var el = $('#recall').fadeIn(300);
            el.css({
                "top": $(window).scrollTop() + $(window).height()/2 - el.innerHeight()/2,
                "left": $(window).width()/2 - el.innerWidth()/2
            })
            return false
        }
    })

    $('.call-meter').on({
        click: function(){
            var el = $('#call-meter').fadeIn(300);
            el.css({
                "top": $(window).scrollTop() + $(window).height()/2 - el.innerHeight()/2,
                "left": $(window).width()/2 - el.innerWidth()/2
            })
            return false
        }
    })
/*
    $('.discount-order').on("click", function(){
        	alert("1");
            var el = $('#discount-order').fadeIn(300);
            el.css({
                "top": $(window).scrollTop() + $(window).height()/2 - el.innerHeight()/2,
                "left": $(window).width()/2 - el.innerWidth()/2
            })
            return false
    })
*/
    $('.popup__close').on({
        click: function(){
            $(this).closest('.popup').fadeOut(300);
            return false
        }
    })

} );

$( window ).load(function(){
    var slider = $( '.ares-slider' );



    if(slider.length) {

        new AresSlider2({
            obj: slider,
            btnPrev: slider.find('.ares-slider__prev'),
            btnNext: slider.find('.ares-slider__next'),
            items: slider.find('.ares-slider_item'),
            visible: 3
        });
    }
} );

var Animation = function(sharesTittle,sharesText,girlImg,sharesPropouse,sharesImg,requisites,generalTitle,generalForm,titleMoove,familyMoove,showList,discount){
    this.sharesTittle = sharesTittle;
    this.sharesText = sharesText;
    this.girlImg = girlImg;
    this.sharesImg = sharesImg;
    this.sharesPropouse = sharesPropouse;
    this.requisites = requisites;
    this.generalTitle = generalTitle;
    this.generalForm = generalForm;
    this.titleMoove = titleMoove;
    this.familyMoove = familyMoove;
    this.showList = showList;
    this.discount = discount;
    this.benefits = $( '.benefits.animation' );
    this.advert = $( '.advert__content' );
    this.turnkey = $( '.turnkey__item' );
    this.action = false;
    this.subMenu = $( '.sub-menu' );
    this.init();
};
Animation.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){

                self.core.controls();

                $(window).on('load', function(){

                    var i;
                    //
                    //self.core.scaleText(self.sharesTittle);
                    //self.core.fadeText(self.sharesText);
                    self.core.showGirl(self.girlImg);

                    setTimeout( function(){

                        for(i = 0; i< self.sharesPropouse.length; i++){

                            var curElem = self.sharesPropouse.eq(i);

                            self.core.showShares(curElem,i);

                        }

                    },1500);

                    if($('.contacts').height()<$(window).height()){
                        self.core.showRequisites(self.requisites);
                    }

                    if ( self.familyMoove.length ){
                        if ( self.familyMoove.offset().top < $(window).height() ){
                            self.core.familyMoove(self.familyMoove);
                        }
                    }

                    if ( self.titleMoove.length ){
                        if (self.titleMoove.offset().top < $(window).height() ){
                            self.core.titleMoove(self.titleMoove);
                        }
                    }

                    if ( self.discount.length ){
                        if (self.discount.offset().top < $(window).height() ){
                            self.core.showDiscount(self.discount);
                        }
                    }

                });

                $(window).on('scroll', function(){

                    var windowScroll =  $(window).scrollTop();




                    if(windowScroll > 100){

                        if(self.action == true){

                            self.core. scaleText(self.sharesImg);

                        }

                    }

                    if(self.turnkey.length){
                        if ($( '.turnkey' ).offset().top - windowScroll < $(window).height() - 500 ){

                            self.core.scaleImage(self.turnkey);

                        }
                    }

                    if(self.advert.length){
                        if (self.advert.offset().top - windowScroll < $(window).height() - 300 ){

                            self.core.showAdvert();

                        }
                    }

                    if(self.requisites.length){
                        if($('.contacts').height()>$(window).height()){
                            if (self.requisites.offset().top - windowScroll < $(window).height() - 50 ){
                                self.core.showRequisites(self.requisites);
                            }
                        }
                    }

                    if(self.generalTitle.length){
                        if (self.generalTitle.offset().top - windowScroll < $(window).height() - 50 ){

                            self.core.showGeneralTitle(self.generalTitle);

                        }
                    }

                    if(self.subMenu.length) {
                        self.subMenu.removeClass('sub-menu__shiver');
                        setTimeout( function(){
                            self.subMenu.addClass('sub-menu__shiver');
                        },1 )

                    }

                    if(self.benefits.length){
                        if (self.benefits.offset().top - windowScroll < $(window).height() - 300 ){

                            self.core.showBenefits();

                        }
                    }

                    if(self.generalForm.length){
                        if (self.generalForm.offset().top - windowScroll < $(window).height() - 50 ){

                            self.core.showGeneralForm(self.generalForm);

                        }
                    }
                    if(self.subMenu.length) {
                        self.subMenu.removeClass('sub-menu__shiver');
                        setTimeout( function(){
                            self.subMenu.addClass('sub-menu__shiver');
                        },1 )

                    }

                    if(self.titleMoove.length){
                        if (self.titleMoove.offset().top - windowScroll < $(window).height() - 50 ){

                            self.core.titleMoove(self.titleMoove);

                        }
                    }

                    if(self.familyMoove.length){
                        if (self.familyMoove.offset().top - windowScroll < $(window).height() - 50 ){

                            self.core.familyMoove(self.familyMoove);

                        }
                    }

                    if(self.discount.length){
                        if (self.discount.offset().top - windowScroll < $(window).height() - 50 ){

                            self.core.showDiscount(self.discount);

                        }
                    }

                    if(self.showList.length){
                        if (self.showList.offset().top - windowScroll < $(window).height() - 50 ){

                            self.core.showList(self.showList);

                        }
                    }

                });

            },
            showBenefits:function(){
                self.benefits.addClass( 'animStart' );
            },
            showAdvert:function(){
                self.advert.addClass( 'animate' );
            },
            scaleText: function(e){

                setTimeout( function(){

                    e.addClass('scale');

                },300)

            },
            scaleImage: function(e){

                e.addClass('scale2');

            },
            fadeText: function(e){

                setTimeout( function(){

                    e.addClass('showText');

                },600)

            },
            showGirl: function(e){

                setTimeout( function(){

                    e.addClass('girl-move');

                },1000);
            },
            showShares: function(e,i){

                setTimeout( function(){

                    e.addClass('show-shares')

                },i*300);

                setTimeout( function(){

                    self.action = true;

                },1200);

            },
            showGeneralTitle: function(e){

//                setTimeout( function(){
//
//                    e.addClass('general-director__anim').css({opacity: 1});
//
//                },700)

            },
            showGeneralForm: function(e){

//                setTimeout( function(){
//
//                    e.addClass('general-director__form')
//
//                },2000)

            },
            showRequisites: function(e){

//                setTimeout( function(){
//
//                    e.addClass('contacts_anim').css({opacity: 1});
//
//                },500)

            },

            titleMoove: function(e){

                setTimeout( function(){

                    e.addClass('plastic-window__moove-title').css({opacity: 1});

                },500)

            },

            familyMoove: function(e){

                setTimeout( function(){

                    e.addClass('plastic-window__family_active').css({opacity: 1});

                },1500)

            },

            showDiscount: function(e){

                setTimeout( function(){

                    e.addClass('plastic-window__discount_active').css({opacity: 1});

                },1000)

            },

            showList: function(e){

                setTimeout( function(){

                    e.addClass('glazing__list_active').css({opacity: 1});

                },300)

            },

            controls: function(){

            }
        };
    }
};

var Advertisement = function( obj ){
    this.obj = obj;
    this.active = 0;
    this.action = false;
    this.items = obj.find( '.advertisement__item' );
    this.btnPrev = obj.find( '.advertisement__btn_prev' );
    this.btnNext = obj.find( '.advertisement__btn_next' );
    this.pages = obj.find( '.advertisement__pages li' );
    this.tooltips = obj.find( '.advertisement__points > div' );
    this.loaded = 0;
    this.images = new Array(6);
    this.window = $( window );

    this.init();
};
Advertisement.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.startView();
                self.core.controls();
            },
            startView: function(){
                self.items.each( function( i ){
                    var arrPics = $( this ).attr( 'data-pic' ).split( ', ' );

                    $.each( arrPics, function( y ){
                        self.core.loadImg( this, i*2 + y );
                    } );

                } );
                self.items.eq( 0 ).css( { left: 0 } );
                self.core.loadImg( 'img/tooltip.png', 4 );
                self.core.loadImg( 'img/tooltip2.png', 5 );
            },
            createImages: function(){
                self.items.each( function( i ){
                    var curItem = $( this),
                        images = $( '<div class="advertisement__pics"/>'),
                        curIndex = i * 2;

                    images.append( self.images[ curIndex + 1] );
                    images.append( self.images[ curIndex ] );

                    $( this ).append( images );

                    images.css( {
                        marginLeft: -images.width() / 2
                    } );

                    self.obj.on( {
                        mousemove: function( e ){
                            var x = -( ( e.pageX - ( self.window.width() / 2 ) ) / ( self.window.width() / 2 ) ) * 20,
                                y = -( ( e.pageY - ( self.window.height() / 2 ) ) / ( self.window.height() / 2 ) ) * 20;

                            curItem.find( '.advertisement__pics img').eq(0).css({
                                'transform': 'translate(' + x + 'px,' + y + 'px)',
                                '-webkit-transform': 'translate(' + x + 'px,' + y + 'px)',
                                '-o-transform': 'translate(' + x + 'px,' + y + 'px)',
                                '-moz-transform': 'translate(' + x + 'px,' + y + 'px)'
                            });
                        }
                    } );
                } );

                self.obj.removeClass( 'empty' );
            },
            loadImg: function( url, index ){
                var newImg = $( new Image() );

                newImg.on( {
                    load: function(){

                        self.images[ index ] = newImg;
                        if( index < 4 ){
                            self.loaded++;
                            if( self.loaded == 4 ){
                                self.core.createImages();
                            }
                        }


                    }
                } );
                newImg.attr( 'src', url )

            },
            controls: function(){
                self.btnNext.on( {
                    click: function(){
                        if( !self.action ){
                            self.action = true;

                            self.tooltips.removeClass( 'active' );

                            self.btnNext.removeClass('active');
                            self.btnPrev.addClass('active');
                            self.pages.eq( 0 ).removeClass('active');
                            self.pages.eq( 1 ).addClass('active');

                            self.items.eq( 0 ).animate( {
                                left: '-100%'
                            }, {
                                duration: 500,
                                easing: 'easeInOutQuad',
                                complete: function(){
                                    self.action = false;
                                }
                            } );
                            self.items.eq( 1 ).animate( {
                                left: '0'
                            }, {
                                duration: 500,
                                easing: 'easeInOutQuad'
                            } );
                        }

                    }
                } );
                self.btnPrev.on( {
                    click: function(){
                        if( !self.action ){
                            self.action = true;

                            self.tooltips.removeClass( 'active' );

                            self.btnPrev.removeClass('active');
                            self.btnNext.addClass('active');
                            self.pages.eq( 1 ).removeClass('active');
                            self.pages.eq( 0 ).addClass('active');

                            self.items.eq( 0 ).animate( {
                                left: '0'
                            }, {
                                duration: 500,
                                easing: 'easeInOutQuad',
                                complete: function(){
                                    self.action = false;
                                }
                            } );
                            self.items.eq( 1 ).animate( {
                                left: '100%'
                            }, {
                                duration: 500,
                                easing: 'easeInOutQuad',
                                complete: function(){
                                    self.action = false;
                                }
                            } );
                        }

                    }
                } );
                self.pages.on( {
                    click: function(){
                        var curItem = $( this );

                        if( !self.action ){

                            if( !curItem.index() ){
                                self.action = true;

                                self.tooltips.removeClass( 'active' );

                                self.btnPrev.removeClass('active');
                                self.btnNext.addClass('active');
                                self.pages.eq( 1 ).removeClass('active');
                                self.pages.eq( 0 ).addClass('active');

                                self.items.eq( 0 ).animate( {
                                    left: '0'
                                }, {
                                    duration: 500,
                                    easing: 'easeInOutQuad',
                                    complete: function(){
                                        self.action = false;
                                    }
                                } );
                                self.items.eq( 1 ).animate( {
                                    left: '100%'
                                }, {
                                    duration: 500,
                                    easing: 'easeInOutQuad',
                                    complete: function(){
                                        self.action = false;
                                    }
                                } );
                            } else {
                                self.action = true;

                                self.tooltips.removeClass( 'active' );

                                self.btnNext.removeClass('active');
                                self.btnPrev.addClass('active');
                                self.pages.eq( 0 ).removeClass('active');
                                self.pages.eq( 1 ).addClass('active');

                                self.items.eq( 0 ).animate( {
                                    left: '-100%'
                                }, {
                                    duration: 500,
                                    easing: 'easeInOutQuad',
                                    complete: function(){
                                        self.action = false;
                                    }
                                } );
                                self.items.eq( 1 ).animate( {
                                    left: '0'
                                }, {
                                    duration: 500,
                                    easing: 'easeInOutQuad'
                                } );
                            }

                        }

                    }
                } );
                self.tooltips.on( {
                    click: function(event){
                        var curItem = $( this );

                        event = event || window.event;


                        if (event.stopPropagation) {
                            event.stopPropagation()
                        } else {
                            event.cancelBubble = true
                        }

                        if( curItem.hasClass( 'active' ) ){
                            self.tooltips.removeClass( 'active' );
                            $('.advertisement__h1').show();
                        } else {
                            self.tooltips.removeClass( 'active' );
                            $( this ).addClass( 'active' );
                            $('.advertisement__h1').hide();
                        }

                    }
                } );
                $( '.advertisement__tooltip' ).on( {
                    click: function(event){
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                } );
                self.obj.on( {
                    click: function(){
                        self.tooltips.removeClass( 'active' );
                        $('.advertisement__h1').show();
                    }
                } );
                $( '.advertisement__tooltip__close' ).on( {
                    click: function(){
                        self.tooltips.removeClass( 'active' );
                        $('.advertisement__h1').show();
                    }
                } );
            }
        }
    }
};

var Gallery = function( obj ){
    this.obj = obj;
    this.duration = 5000;
    this.items = obj.find( '.gallery-item' );
    this.active = 0;
    this.action = false;
    this.timer = setTimeout(function(){},1);

    this.init();
};
Gallery.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.startView();
                self.core.controls();
                self.core.slideToNext();
            },
            startView: function(){
                self.btnPrev = $( '<a href="#" class="gallery__prev">' );
                self.btnNext = $( '<a href="#" class="gallery__next">' );

                self.obj.append( self.btnPrev );
                self.obj.append( self.btnNext );

                self.core.setClasses( 1 );
            },
            setClasses: function( direction ){
                var nextIndex, nextIndex2, prefix;

                if( direction == 1 ){
                    nextIndex = self.active + 1;
                    nextIndex2 = self.active + 2;
                    prefix = 'prev';
                } else {
                    nextIndex = self.active + 1;
                    nextIndex2 = self.active -2;
                    prefix = 'next';
                }


                if( nextIndex >= self.items.length ){
                    nextIndex = nextIndex - self.items.length;
                }
                if( nextIndex2 >= self.items.length ){
                    nextIndex2 = nextIndex2 - self.items.length;
                }

                self.action = true;
                self.items.eq( self.active ).attr( 'class', 'gallery-item gallery-item_' + prefix + '-center');
                self.items.eq( self.active - 1 ).attr( 'class', 'gallery-item gallery-item_' + prefix + '-left');
                self.items.eq( nextIndex ).attr( 'class', 'gallery-item gallery-item_' + prefix + '-right');
                self.items.eq( nextIndex2 ).attr( 'class', 'gallery-item gallery-item_' + prefix + '-zero');

                setTimeout(function(){
                    self.action = false;
                    self.core.slideToNext();
                },510)
            },
            slideToNext: function(){
                self.timer = setTimeout( function(){
                    self.btnNext.trigger( 'click' );
                }, self.duration );
            },
            controls: function(){
                self.btnPrev.on( {
                    click: function(){

                        if( !self.action ){
                            self.active--;
                            clearTimeout( self.timer );
                            if( self.active < 0 ){
                                self.active = self.items.length - 1;
                            }

                            self.core.setClasses(1);
                        }

                        return false;
                    }
                } );
                self.obj.on( {
                    'mouseover': function(){
                        clearTimeout( self.timer );
                    },
                    'mouseleave': function(){
                        self.core.slideToNext();
                    }
                } );
                self.btnNext.on( {
                    click: function(){

                        if( !self.action ){
                            self.active++;
                            clearTimeout( self.timer );
                            if( self.active == self.items.length ){
                                self.active = 0;
                            }

                            self.core.setClasses(-1);
                        }

                        return false;
                    }
                } );
            }
        }
    }
};

var AresSlider2 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;
    this.duration = params.duration || 5000;
    this.active = 0;
    this.speed = params.speed || 300;
    this.visible = params.visible || 3;

    console.log(222)

    this.init();
};
AresSlider2.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.bulild();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            bulild: function(){
                var i,
                    curItem,
                    tl = new TimelineMax();

                self.itemWidth = elems.items.eq( 0 ).width();
                self.indent = ( self.obj.width() - ( self.visible * self.itemWidth ) ) / ( self.visible - 1 );

                self.items = [];
                elems.items.each( function( i ){
                    curItem = $( this );
                    self.items[ i ] = curItem.find( '.ares-slider_block' ).clone();
                    curItem.remove();
                } );

                self.step = self.itemWidth + self.indent;

                for( i = 0; i < self.visible; i++ ){
                    curItem = $( '<li class="ares-slider_item" style="left: ' + i * self.step + 'px"></li>' );
                    curItem.append( self.items[ i ].clone().addClass( 'ares-slider_face' ) );
                    self.obj.find( '> ul' ).append( curItem );
                    tl.insert( TweenLite.fromTo( curItem.find( '.ares-slider_block' ), 0,{
                        transformPerspective:500,
                        transformOrigin:"center center",
                        rotationY: 0
                    }, {
                        rotationY: 0
                    } ), 0 );
                }

                elems.items = self.obj.find( ' > ul li' );

                self.core.controls();
                self.core.slideToNext();
            },
            slideToNext: function(){
                self.timer = setTimeout( function(){
                    elems.btnNext.trigger( 'click' );
                }, self.duration );
            },
            controls: function(){
                elems.btnPrev.on( {
                    'click': function(){
                        if( !self.action ){
                            self.slidePrev();
                        }
                    }
                } );
                elems.btnNext.on( {
                    'click': function(){
                        console.log(1)
                        if( !self.action ){
                            self.slideNext();
                        }
                    }
                } );
                self.obj.on( {
                    'mouseover': function(){
                        clearTimeout( self.timer );
                    },
                    'mouseleave': function(){
                        self.core.slideToNext();
                    }
                } );
            }
        };
    },
    slideNext: function() {
        var self = this,
            elems = self.elems,
            curItem,
            parent,
            curIndex = self.active + 1,
            tl = new TimelineMax( {
                paused: true,
                onComplete: function(){
                    var back = self.obj.find( '.ares-slider_back' );
                    self.obj.find( '.ares-slider_face' ).remove();
                    back.removeClass( 'ares-slider_back' );
                    back.addClass( 'ares-slider_face' );
                    self.action = false;
                    self.core.slideToNext();
                }
            } );

        clearTimeout( self.timer );
        self.action = true;
        elems.items.each( function(){

            if( curIndex == self.items.length  ){
                curIndex = 0
            }

            parent = $( this );
            curItem = parent.find( '.ares-slider_face' );
            parent.append( self.items[ curIndex ].clone().addClass( 'ares-slider_back' ) );
            curIndex++;

            tl.insert( TweenLite.fromTo( curItem, self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: 0
            }, {
                rotationY: 180,

                ease: Linear.easeNone
            } ), 0 );
            tl.insert( TweenLite.fromTo( parent.find( '.ares-slider_back' ), self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: -180
            }, {
                rotationY: 0,
                ease: Linear.easeNone
            } ), 0 );
        } );

        if( self.active == self.items.length - 1 ){
            self.active = 0;
        } else {
            self.active++;
        }
        tl.play();
    },
    slidePrev: function() {
        var self = this,
            elems = self.elems,
            curItem,
            parent,
            curIndex = self.active - 1,
            tl = new TimelineMax( {
                paused: true,
                onComplete: function(){
                    var back = self.obj.find( '.ares-slider_back' );
                    self.obj.find( '.ares-slider_face' ).remove();
                    back.removeClass( 'ares-slider_back' );
                    back.addClass( 'ares-slider_face' );
                    self.action = false;
                    self.core.slideToNext();
                }
            } );

        clearTimeout( self.timer );
        self.action = true;
        elems.items.each( function(){

            if( curIndex == self.items.length  ){
                curIndex = 0
            }

            parent = $( this );
            curItem = parent.find( '.ares-slider_face' );
            parent.append( self.items[ curIndex ].clone().addClass( 'ares-slider_back' ) );
            curIndex++;

            tl.insert( TweenLite.fromTo( curItem, self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: 0
            }, {
                rotationY: 180,

                ease: Elastic.easeOut
            } ), 0 );
            tl.insert( TweenLite.fromTo( parent.find( '.ares-slider_back' ), self.speed/1000,{
                transformPerspective:500,
                transformOrigin:"center center",
                rotationY: -180
            }, {
                rotationY: 0,
                ease: Elastic.easeOut
            } ), 0 );
        } );

        if( self.active == 0 ){
            self.active = self.items.length - 1;
        } else {
            self.active--;
        }
        tl.play();
    }
};

// Custom list imitation select box
$(function() {
    'use strict';

    var elem = $('.select-list'),
        itemActive = elem.children('.select-list-active'),
        list = elem.children('ul'),
        indificationClass = 'lam-'; //without id number

    elem.click(function() {

        if($(this).hasClass('active')) return;

        $(this).addClass('active');
        $(list).addClass('active');

    });

    elem.on('click', '.select-list-item', function() {

        var id = $(this).data('id');
        var value = $(this).data('value');
        var active_id = $(itemActive).data('id');

        $(list).find('.active').removeClass('active');
        $(this).addClass('active');

        $(itemActive)
            .removeClass(indificationClass + active_id)
            .addClass(indificationClass + id)
            .val(value)
            .data('id', id)
            .trigger('select-list-change', itemActive);
    });


    // Hide list .active
    $(document).click(function(e) {

        if( $(e.target).is(itemActive) ) return;

        $(elem).removeClass('active');
        $(list).removeClass('active');

    });

});

/* accordion */
;(function($) {
    'use strict';

    $.fn.simpleAccordion = function() {

        return this.each(function () {

            var target = $(this).data('target');

            $(this).click(function () {

                var $this = $(this);

                if ($this.hasClass('active')) {
                    $this.removeClass('active');
                } else {
                    $this.addClass('active');
                }

                if ($(target, $this).hasClass('active')) {
                    $(target, $this).removeClass('active');
                } else {
                    $(target, $this).addClass('active');
                }

            });

        });
    };
}(jQuery));

// Select count
$(function() {
    var elem = '[name="count"]';

    if($(elem).length) {

        var btnPlus = $(elem).parent().find('[name="count_plus"]'),
            btnMinus = $(elem).parent().find('[name="count_minus"]');

        if($(btnPlus).length && $(btnMinus).length) {

            $(btnPlus).on('click', function () {
                var count = $(elem).val();

                if(count < 9) count++;

                $(elem).val(count);

                $(elem).trigger('count-change', elem);

            });

            $(btnMinus).on('click', function () {
                var count = $(elem).val();

                if(count > 1) count--;

                $(elem).val(count);

                $(elem).trigger('count-change', elem);

            });

        }
    }
});

/**
* jQuery.waterfall
* https://github.com/LinZap/jquery.waterfall
*/
(function($){var g_option={_init_:{top:false,w:false,col:false,gap:10,gridWidth:[0,400,600,800,1200],refresh:500,timer:false,scrollbottom:false}},hash=0;var methods={init:function(){var id=getHashId(this);if(!g_option[id]){g_option[id]=$.extend({},g_option._init_)}if(arguments[0]){g_option[id]=$.extend(g_option[id],arguments[0])}if(g_option[id].scrollbottom){g_option[id].scrollbottom=$.extend({ele:this.parent(),endele:$('<div>').css({width:'100%',textAlign:'center',position:'absolute'}),endtxt:'No More Data',gap:300},g_option[id].scrollbottom)}this.css('position','relative');detect(this)},sort:function(){sorting(this)},stop:function(){var id=getHashId(this);if(g_option[id].timer){clearInterval(g_option[id].timer);g_option[id].timer=false}},end:function(){var id=getHashId(this);if(g_option[id].scrollbottom){g_option[id].scrollbottom.ele.css('top',g_option[id].top[getPolesCol(id,true)]+"px");this.append(g_option[id].scrollbottom.endele)}if(g_option[id].timer){clearInterval(g_option[id].timer);g_option[id].timer=false}}};function getPolesCol(id,boo){var top=g_option[id].top,col=0,v=top[col];for(var i=0;i<top.length;i++){if(boo){if(top[i]>v){v=top[i];col=i}}else{if(top[i]<v){v=top[i];col=i}}}return col}function sorting(t){var id=getHashId(t);var gw=g_option[id].gridWidth,w=g_option[id].w,gap=g_option[id].gap,scrollbottom=g_option[id].scrollbottom;g_option[id].col=1;g_option[id].top=[];for(var i=gw.length-1;i>=0;i--){if(w>gw[i]){g_option[id].col=i+1;break}}var cwidth=(w-((g_option[id].col-1)*gap))/g_option[id].col,left=[];for(var j=0;j<g_option[id].col;j++){left.push(j*cwidth+j*gap);g_option[id].top.push(0)}t.children().css({position:'absolute',left:(w/2-cwidth/2)+'px',top:t.scrollTop(),transition:'left '+g_option[id].refresh+'ms ease-in-out,'+'top '+g_option[id].refresh+'ms ease-in-out,'+'opacity '+g_option[id].refresh+'ms ease-in-out'}).each(function(){var ic=getPolesCol(id,false);$(this).css({width:cwidth+'px',left:left[ic]+'px',top:g_option[id].top[ic]+'px',opacity:'1'});g_option[id].top[ic]+=$(this)[0].offsetHeight+gap});t.css("height",g_option[id].top[getPolesCol(id,true)]+"px");if(scrollbottom)if(scrollbottom.endele)scrollbottom.endele.addClass('endele').text(scrollbottom.endtxt).css('top',g_option[id].top[getPolesCol(id,true)]+"px")}function detect(t){var id=getHashId(t);if(!g_option[id].timer){g_option[id].timer=setInterval(function(){var bw=t[0].offsetWidth;if(g_option[id].w!==bw){g_option[id].w=bw;sorting(t)}if(g_option[id].scrollbottom){if(g_option[id].scrollbottom.callback&&isbottom(g_option[id].scrollbottom.ele,g_option[id].scrollbottom.gap)){g_option[id].scrollbottom.callback(t)}}},g_option[id].refresh)}sorting(t)}function isbottom(ele,gap){var wh=$(window).height();return((wh+ele.scrollTop())>(ele.prop("scrollHeight")-gap))}function getHashId(t){if(!t.attr('wf-id')){hash+=0.1;t.attr('wf-id',hash)}return t.attr('wf-id')}$.fn.waterfall=function(){var res;if(!arguments[0]||typeof arguments[0]==='object'){res=methods.init.apply(this,arguments)}else if(methods[arguments[0]]){res=methods[arguments[0]].apply(this,Array.prototype.slice.call(arguments[0],1))}else{$.error('Method '+arguments[0]+' does not exist on jQuery.waterfall')}return res||this}})(jQuery);

$(document).ready(function () {

    // element must have name of second element in data-target
    $('[data-toggle="accordion"]').simpleAccordion();

    if($('.pinterest-grid').length) {
        $('.pinterest-grid').waterfall({
          gridWidth: [0,768,1200]
      });
    }
});