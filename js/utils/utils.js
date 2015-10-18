function adapt_image(){
  var h=$("img[src='img/face/riccardo.jpg']").height();
  var w=$("img[src='img/face/riccardo.jpg']").width();
  $("img[src='img/face/riccardo.jpg']").width(w).height(h);
  $("img[src='img/face/federico.png']").width(w).height(h);
$("img[src='img/face/empty.jpg']").eq(0).width(w).height(h);
$("img[src='img/face/empty.jpg']").eq(1).width(w).height(h);
$("img[src='img/face/elio.jpg']").width(w).height(h);

}

$(function(){

$(window).resize(function(){
//when page size change
adapt_image();
});

});//end jQuery
