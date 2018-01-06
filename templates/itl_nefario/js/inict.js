

$(function(){$(".phone_input").mask("+7 (999) 999-99-99",{placeholder:"_"});
var mess_phone="Телефон";$(".phone_input").attr("value",mess_phone);$(".phone_input").blur(function(){if($(".phone_input").attr("value")==""){$(".phone_input").attr("value",mess_phone);}});

$(".phone_input1").mask("+7 (999) 999-99-99",{placeholder:"_"});
var mess_phone="Телефон";$(".phone_input1").attr("value",mess_phone);$(".phone_input1").blur(function(){if($(".phone_input1").attr("value")==""){$(".phone_input1").attr("value",mess_phone);}});

$("#enter1").mask("+7 (999) 999-99-99",{placeholder:"_"});
var mess_phone="Телефон";$("#enter1").attr("value",mess_phone);$("#enter1").blur(function(){if($("#enter1").attr("value")==""){$("#enter1").attr("value",mess_phone);}});

$(".phone_input2").mask("+7 (999) 999-99-99",{placeholder:"_"});
var mess_phone="Телефон";$(".phone_input2").attr("value",mess_phone);$(".phone_input2").blur(function(){if($(".phone_input2").attr("value")==""){$(".phone_input2").attr("value",mess_phone);}});$(".phone_input3").mask("+7 (999) 999-99-99",{placeholder:"_"});var mess_phone="Телефон";$(".phone_input3").attr("value",mess_phone);$(".phone_input3").blur(function(){if($(".phone_input3").attr("value")==""){$(".phone_input3").attr("value",mess_phone);}});$(".phone_input4").mask("+7 (999) 999-99-99",{placeholder:"_"});var mess_phone="Телефон";$(".phone_input4").attr("value",mess_phone);$(".phone_input4").blur(function(){if($(".phone_input4").attr("value")==""){$(".phone_input4").attr("value",mess_phone);}});$(".phone_input5").mask("+7 (999) 999-99-99",{placeholder:"_"});var mess_phone="Телефон";$(".phone_input5").attr("value",mess_phone);$(".phone_input5").blur(function(){if($(".phone_input5").attr("value")==""){$(".phone_input5").attr("value",mess_phone);}});});

function ck_mail(str){return/^[a-z0-9_\.]+@[a-z0-9_\.]+.[a-z]{2,3}$/.test(str);}
function checkPhone(){
var conf=document.getElementById('conf');if(conf.checked){}else{alert('Согласитесь на обработку персональных данных!');return false;}
var name_field=document.getElementById('fio');if(name_field.value=="Ваше имя"){alert('Введите, пожалуйста, Ваше имя!');return false;}
var phone=document.getElementById('phone');if(phone.value=="Телефон"){alert('Введите, пожалуйста, Ваш телефон!');return false;}
var email=document.getElementById('link_mailbox');if(email.value!="E-mail:"){if(!ck_mail(email.value)){alert('Введите правильный e-mail!');return false;}}}
function checkPhone1()
{var conf=document.getElementById('conf1');if(conf.checked){}else{alert('Согласитесь на обработку персональных данных!');return false;}
var name_field=document.getElementById('fio1');if(name_field.value=="Ваше имя"){alert('Введите, пожалуйста, Ваше имя!');return false;}

var phone=document.getElementById('phone1');if(phone.value=="Телефон"){alert('Введите, пожалуйста, Ваш телефон!');return false;}

var email=document.getElementById('email1');if(email.value!="E-mail"){if(!ck_mail(email.value)){alert('Введите правильный e-mail!');return false;}}}
function checkPhone2(){
var conf=document.getElementById('conf2');if(conf.checked){}else{alert('Согласитесь на обработку персональных данных!');return false;}
var name_field=document.getElementById('fio2');if(name_field.value=="Ваше имя"){alert('Введите, пожалуйста, Ваше имя!');return false;}
var phone=document.getElementById('phone2');if(phone.value=="Телефон"){alert('Введите, пожалуйста, Ваш телефон!');return false;}
var email=document.getElementById('email2');if(email.value!="Эл. почта"){if(!ck_mail(email.value)){alert('Введите правильный e-mail!');return false;}}}
function checkPhone3(){
var name_field=document.getElementById('fio3');if(name_field.value=="Ваше имя"){alert('Введите, пожалуйста, Ваше имя!');return false;}
var phone=document.getElementById('phone3');if(phone.value=="Телефон"){alert('Введите, пожалуйста, Ваш телефон!');return false;}
var email=document.getElementById('email3');if(email.value!="Эл. почта"){if(!ck_mail(email.value)){alert('Введите правильный e-mail!');return false;}}}
function checkPhone4(){
var name_field=document.getElementById('fio4');if(name_field.value=="Ваше имя"){alert('Введите, пожалуйста, Ваше имя!');return false;}
var phone=document.getElementById('phone4');if(phone.value=="Телефон"){alert('Введите, пожалуйста, Ваш телефон!');return false;}
var email=document.getElementById('email4');if(email.value!="Эл. почта"){if(!ck_mail(email.value)){alert('Введите правильный e-mail!');return false;}}}