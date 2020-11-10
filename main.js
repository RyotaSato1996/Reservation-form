/* jshint curly:true, debug:true */
/* globals $, firebase */

/**
 * -------------------------
 * 予約に関する情報の登録処理
 * -------------------------
 */
 
// 情報の登録処理
$('#contact-form').on('submit', (e) => {
  e.preventDefault();
  
  const userName = $('#user_sei').val() + $('#user_mei').val();
  
  $('.User_Name').text(userName);
  
  const userNameKana = $('#user_sei_kana').val() + $('#user_mei_kana').val();
  
  $('.User_Kana').text(userNameKana);
    
  const userEmail = $('#user_email').val();
  
  $('.User_Email').text(userEmail);
    
  const checkinDate = $('#checkin_date').val();
  
  $('.CheckIn_Date').text(checkinDate);
    
  const Hakusu = $('#hakusu').val() + "泊";
  
  $('.Hakusu_Count').text(Hakusu);
    
  const checkinTime = $('#check_in_time').val();
  
  $('.CheckIn_Time').text(checkinTime);
    
  const Otoko = $('#otoko').val() + "名";
  
  $('.Otoko').text(Otoko);
    
  const Onna = $('#onna').val() + "名";
  
  $('.Onna').text(Onna);
    
  const Syogakusei = $('#syogakusei').val() + "名";
  
  $('.Syogakusei').text(Syogakusei);
    
  const Youzi = $('#youzi').val() + "名";
  
  $('.Youzi').text(Youzi);
    
  const readerName = $('#reader_sei').val() + $('#reader_mei').val();
  
  $('.Reader_Name').text(readerName);
    
  const readerNameKana = $('#reader_sei_kana').val() + $('#reader_mei_kana').val();
  
  $('.Reader_Kana').text(readerNameKana);
    
  const Bangou = "〒" + $('#bangou1').val() + "-" + $('#bangou2').val();
  
  $('.Yubinbangou').text(Bangou);
    
  const Region = $('#region').val();
  
  $('.Region').text(Region);
    
  const Jusyo = $('#jusyo').val();
  
  $('.Jusyo').text(Jusyo);
    
  const Telnumber = $('#tel-number').val();
  
  $('.Tel_Number').text(Telnumber);
    
  const userAge = $('#user_age').val();
  
  $('.User_Age').text(userAge);

  $('#main').hide();
  $('#confirmation').fadeIn();
});

const resetForm = () => {
  $('#contact-form')[0].reset();
};

$('#complete-button').on('click', (e) => {
 
  $('#confirmation').hide();
  $('#complete').fadeIn();
  
});

$('#return-button').on('click', (e) => {
  $('#confirmation').hide();
  $('#main').fadeIn();
});

$('#top-button').on('click', (e) => {
  $('#main').fadeIn();
  $('#complete').hide();
  $('#contact-form')[0].reset();
});

