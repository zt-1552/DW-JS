;(function($, undefined) {

  $('#btn-top-red').on('click', function (){
    $('#btn-top-red').hide(200);
    $('#btn-top-grey').show(200);
    setTimeout(startCountUp, 1000);
    setTimeout(animBtn, 9000);
    setTimeout(addRedAndTimer, 13000);
  })

  $('#btnClear').on('click', function (){
    $('#wrap').hide();
  })

function addRedAndTimer () {
  $('#btn-top-grey').removeClass('btn-secondary').addClass('btn-danger');
  $('#btn-top-fast-counter').show(200).addClass('d-flex align-items-start');
  countFast();
}

  var countdown = $('#btn-top-grey'),
      timer;
  function startCountUp(){
      var start = 0;
      timer = setInterval(function(){
          if (start == 0 || start == 5) {
            countdown.text(start++ + ' ' + 'секунд');
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

  function animBtn () {
    countdown.animate (
      {
        marginLeft: "200px",
        marginTop: "100px",
        borderRadius: "20px",
      }, 2000 );
  }

var timerFast,
    fastTimerBtn = $('#btn-top-fast-counter');
function countFast(){
  var start = 0;
  timerFast = setInterval(function (){
    fastTimerBtn.text(start++);
    if (start == 45) {
      clearInterval(timerFast);
      $('#modal-window').modal();
    }
  }, 100);
}

})(jQuery);
