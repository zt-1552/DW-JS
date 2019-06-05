;(function($, undefined) {

  $('#btn-top-red').on('click', function (){
    $('#btn-top-red').hide(200);
    $('#btn-top-grey').show(200);
    setTimeout(startCountUp, 1000);
})


  var countdown = $('#btn-top-grey'),
      text = 'секунд',
      timer;
  function startCountUp(){
      var start = 0;
      timer = setInterval(function(){
          if (start == 0 || start == 5) {
            countdown.text(start++ + ' ' + text);
          } else if (start == 1) {
            countdown.text(start++ + ' ' + 'секунда');
          }else {
            countdown.text(start++ + ' ' + 'секунды');
          }
          if(start > 6) {
              clearInterval(timer);
              countdown.text('Готово');
          }
      },1000);
  }

})(jQuery);
