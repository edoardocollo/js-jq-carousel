var frecciaDestra = $('.fa-angle-right');

frecciaDestra.click(function(){
  var  first = $('.first');
  var  next = $('.active').next();
  var  last = $('.last');
  var  active = $('.active');
  var immagine = $('.images > img');
  if (last.hasClass('active')) {
    last.removeClass('active');
    first.addClass('active');

  }else{

    active.removeClass('active');
    next.addClass('active')
  }

});
