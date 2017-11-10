$( document ).ready(function() {
  $('.collapsed').click(function() {

    var btn = $(this).find('.expand');
    var short = $(this).height();
    $(this).css('height', 'auto');
    var tall = $(this).height();
    $(this).css('height', short);
    console.log(short);
    if ($(this).height() == short) {
      $(this).animate({height: tall}, 230);
      btn.fadeOut(230);
    };
  });
});
