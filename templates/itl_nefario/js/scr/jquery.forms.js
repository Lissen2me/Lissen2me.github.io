/**
 * Created by Марк on 18.11.2016.
 */
$(document).ready(function() {

    function get_assept_time(){
        var d = new Date();

        var hour = d.getHours();
        if(hour >= 9 && hour <= 20){
            return true;
        }
        else{
            return false;
        }
    }

    $("#forma5>form").submit(function (e) {
        // e.preventDefault();
        var tel = $("#inp2_obrzv").val();
        var name = $("#inp1_obrzv").val();
        var message = "Заказать обратный звонок";
        var mySale = false;

        if(tel == ''){
            return false;
        }

        ga('send', 'event', 'callback', 'send');
        yaCounter7392112.reachGoal('callback');

        if(get_assept_time()){
            Comagic.sitePhoneCall({phone: tel}, function(obs){
                if(obs.success){
                    Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
                        if(res.statusText == "OK") {
                            $("#forma5").html("<h2 style='margin-left: 40px; color:#33cc33; text-align:center'>Ожидайте звонка</h2><br /><p style='width:100%; text-align:center'>в течение 6 секунд</p>");
                        }
                    });

                }
                else {
                    $( "<p style='color:red'>Отправить не удалось</p>" ).insertAfter( "#calc_it_obrzv" );
                }
            });
            return false;
        }
        else {
            return true;
        }
    });

    $(document).on('click', '#form2_rasprodazha', function (e) {
        var frm = $("#sale .windows-calculate");
        var tel = $("#phone_rasprodazha").val();
        var name = $("#fio_rasprodazha").val();
        var message = "Распродажа";
        var mySale = false;

        if(tel == ''){
            return false;
        }
        //console.log('send');
        ga('send', 'event', 'salecounter', 'send');
        yaCounter7392112.reachGoal('salecounter');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            frm.submit();
        });
        return false;
        e.preventDefault();
    });

	$(document).on('click', '#form4_za5minut', function (e) {
        var tel = $("#phone_za5minut").val();
        var name = $("#fio_za5minut").val();
        var message = "Расчет за 5 минут";
        var mySale = false;

        if(tel == ''){
            return false;
        }
        ga('send', 'event', 'windowscalculation', 'send');
        yaCounter7392112.reachGoal('calculation5minut');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $("#forfive").submit();
        });
		return false;
        e.preventDefault();
    });

	$(document).on('click', '#form7_balkon_rashet', function (e) {
        var tel = $("#inp2_balkon_rashet").val();
        var name = $("#inp1_balkon_rashet").val();
        var message = "Калькулятор балконов";
        var mySale = true;

        if(tel == ''){
            return false;
        }
        ga('send', 'event', 'ordersale', 'send');
        yaCounter7392112.reachGoal('orderfromcalculator2');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $("#discount-order form").submit();
        });
		return false;
        e.preventDefault();
    });

	$(document).on('click', '#form10', function (e) {
        var tel = $("#inp2_tel").val();
        var name = $("#inp1_fio").val();
        var message = "Калькулятор окон";
        var mySale = true;

        if(tel == ''){
            return false;
        }
        ga('send', 'event', 'ordersale2', 'send');
        yaCounter7392112.reachGoal('orderfromcalculator');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $("#discount-order-new form").submit();
        });
		return false;
        e.preventDefault();
    });

	$(document).on('click', '#girl_web_form_submit', function (e) {
        var tel = $("#girl_form_text_4").val();
        var name = $("#girl_form_text_3").val();
        var message = "Выпадашка девушка";
        var mySale = true;

        if(tel == ''){
            return false;
        }
        ga('send', 'event', 'saleapplication', 'send');
        yaCounter7392112.reachGoal('saleapplication');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $(".scchasgrey2 form").submit();
        });
		return false;
        e.preventDefault();
    });

	$(document).on('click', '#form6_conta', function (e) {
        var tel = $("#tel_conta").val();
        var name = $("#fio_conta").val();
        var message = "Письмо директору";
        var mySale = false;

        if(tel == ''){
            return false;
        }
        ga('send', 'event', 'contactsdirector', 'send');
        yaCounter7392112.reachGoal('contactsdirector');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $("#direct>form").submit();
        });
		return false;
        e.preventDefault();
    });

	$(document).on('click', '#web_form_submit_pozdr', function (e) {
        var tel = $("#form_text_2_pozdr").val();
        var name = $("#form_text_1_pozdr").val();
        var message = "Всплывающее окно";
        var mySale = true;

        if(tel == ''){
            return false;
        }
        ga('send', 'event', 'orderbalcony', 'send');
        yaCounter7392112.reachGoal('orderbalcony');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $(".kupongrey form").submit();
        });
		return false;
        e.preventDefault();
    });


    $("#form3_nr").click(function (e) {
        // e.preventDefault();
        var tel = $("#phone_nr").val();
        var name = $("#fio_nr").val();
        var message = "Вызов замерщика";
        var mySale = false;
        if(tel == ''){
            return false;
        }

        ga('send', 'event', 'callgager', 'send');
        yaCounter7392112.reachGoal('zamerschik');

        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $("#forma2>form").submit();
        });
    });

    $("#form7_osteklenie_balkonov").click(function (e) {
        // e.preventDefault();
        var tel = $("#inp2_osteklenie_balkonov").val();
        var name = $("#inp1_osteklenie_balkonov").val();
        var message = "Заказ балкона";
        var mySale = true;

        if(tel == ''){
            return false;
        }

        ga('send', 'event', 'orderbalcony', 'send');
        yaCounter7392112.reachGoal('orderbalcony');
        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $(".scchasgrey2 form").submit();
        });
    });

    $("#montazh-free__right>form").submit(function (e) {
        // e.preventDefault();
        var tel = $(".input_tel>input").val();
        var name = $(".input_name>input").val();
        var message = "Заявка с формы «Монтаж в подарок» ";
        var mySale = true;
        if(tel == ''){
            return false;
        }
        ga('send', 'event', 'installation', 'send');
        yaCounter7392112.reachGoal('installation');

        Comagic.addOfflineRequest({name: name, phone: tel, message: message, is_sale: mySale},function(res){
            $("#montazh-free__right>form").submit();
        });
    });

    if (!$.cookie('show_popup_oknad8')) {
        setTimeout(show_popup_100kupon, 10000);
    }

    if($.cookie('show_popup_100_oknad8_btn')) {

        createPopUpBtn('kupongrey-btn');

        $('.kupongrey-btn').css('display','block');

        $('.kupon_cifra__wait').remove();
    }

    function show_popup_100kupon()
    {
        if (!$.cookie('show_popup_100_oknad8')) {
            $('.kupongrey').css("display","block");
            startCountdown();

            $.cookie('show_popup_100_oknad8_btn', true);
        }

        $.cookie('show_popup_100_oknad8', true, {
            expires: 1,
            path: '/'
        });
    }

    var countdown = $('.kupon_cifra__wait span'), timer;
    function startCountdown(){
        var startFrom = 60;
        //var startFrom = 6;/////////////
        timer = setInterval(function(){
            countdown.text(--startFrom);
            if(startFrom <= 0) {
                clearInterval(timer);
                //$('.kupongrey').css("display","none");///
                popUpHide();
            }
        },1000);
    }

    $(".scchasblockclose").click(function () {
        $(".scchasgrey").css("display","none");
    });

    /*$(".kuponclose").click(function () {
        $(".kupongrey").css("display","none");
    });*/

    $('.kuponclose').click(function () {
        popUpHide();
    });

    $(".kuponclosefly").click(function () {
        $(".scchasgrey2").css("display","none");
    });

    $(".kuponcloseok").click(function () {
        $(".kupongrey").css("display","none");
        //$(".scchasgrey2").css("display","none");
    });

    $('body').on('click', '.kupongrey-btn', function () {
        $('.kupongrey-btn').css('display', 'none');
        $('.kupongrey').css('display', 'block');

        setTimeout(function () {
            $('.kuponbg').css('transform', 'translate(0px, 0px) scale(1, 1)');
        }, 1);
    });

    function popUpHide() {
        var popup = $('.kuponbg');
        var popupBg = $('.kupongrey');
        var btn = 'kupongrey-btn';

        createPopUpBtn(btn);

        var x = document.documentElement.clientWidth - 80 - popup.offset().left - (popup.width() / 2);
        var y = window.pageYOffset + 260 - popup.offset().top - (popup.height() / 2);

        $(popup).css('transform', 'translate('+ x +'px, '+ y +'px) scale(0, 0)');

        setTimeout(function () {
            $(popupBg).css('display', 'none');
            $('.'+btn).css('display', 'block');

            $('.kupon_cifra__wait').remove();
        }, 800);
    }

    function createPopUpBtn(btnClassName) {
        if(!$('.'+btnClassName).length) {
            $('body').append($('<div />', {
                'class': btnClassName
            }));
        }
    }

});