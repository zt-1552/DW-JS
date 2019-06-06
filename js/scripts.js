;(function($, undefined) {

  $('#btn-top-red').on('click', function (){
    $('#btn-top-red').hide();
    $('#btn-top-grey').show();
    counter5second();
  })

function counter5second() {
  var count = 5;
  for (var i = 0; i <= count; i++) {
    $('#btn-top-grey').html(i + 'секунд').delay(5000);
    console.log(i + 'секунд');
  }
}

function addHtml(sec, text) {

}

})(jQuery);
