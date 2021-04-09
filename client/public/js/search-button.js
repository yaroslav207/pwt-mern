$(".search-btn").click(function(){
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});

$('#raty').raty({
  readOnly:  true,
  start:     2
});