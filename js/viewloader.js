$(function(){
  console.log('jquery loaded');
  var includes = $('[data-include]');
  console.log('included files', includes);
  jQuery.each(includes, function(){
    var file = 'views/' + $(this).data('include') + '.html';
    console.log('loaded:', file);
    $(this).load(file);
  });
});
