var frecciaDestra = $('.fa-angle-right');
var frecciaSinistra = $('.fa-angle-left');
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
frecciaSinistra.click(function(){
  var  first = $('.first');
  var  before = $('.active').prev();
  var  last = $('.last');
  var  active = $('.active');
  var immagine = $('.images > img');
  if (first.hasClass('active')) {
    first.removeClass('active');
    last.addClass('active');
  }else{
    active.removeClass('active');
    before.addClass('active');

  }

});
$(document).keydown(function(event){
  var x = event.keyCode;
  if (x == 37) {

    var  first = $('.first');
    var  before = $('.active').prev();
    var  last = $('.last');
    var  active = $('.active');
    var immagine = $('.images > img');
    if (first.hasClass('active')) {
      first.removeClass('active');
      last.addClass('active');
    }else{
      active.removeClass('active');
      before.addClass('active');

    }
  }else if(x == 39){
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

  }
});
