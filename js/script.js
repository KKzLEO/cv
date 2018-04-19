var wow = new WOW();
wow.init();

window.addEventListener('scroll', function(e) {
    if( $(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        $('#art').addClass('bounceInLeft');
        $('#coding').addClass('bounceInRight');
        new WOW().init();
    }
})


$(function(){
  $(".nav li a").click(function(){
      $('.nav li').removeClass('active');
      $(this).closest("li").addClass("active");
  });
});


$(function(){
  $('.nav li:eq(0)').click(function(){
    $('html , body').animate({"scrollTop":0});
  });
  $('.nav li:eq(1)').click(function(){
    $('html , body').animate({"scrollTop":$('#about_section').offset().top-60});
  });
  $('.nav li:eq(2)').click(function(){
    $('html , body').animate({"scrollTop":$('#portfolio_section').offset().top-60});
  });
  $('.nav li:eq(3)').click(function(){
    $('html , body').animate({"scrollTop":$('#contact-section').offset().top});
  });
});

$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>=0 && $(window).scrollTop()<$("#about_section").offset().top-60){  // 60 is navbar
      $('.nav li').removeClass('active');
      $('.nav li:eq(0)').addClass("active");
    }else if($(window).scrollTop()>=$("#about_section").offset().top-60 && $(window).scrollTop()<$("#portfolio_section").offset().top-60){
      $('.nav li').removeClass('active');
      $('.nav li:eq(1)').addClass("active");
    }else if($(window).scrollTop()>=$("#portfolio_section").offset().top-60){
      $('.nav li').removeClass('active');
      $('.nav li:eq(2)').addClass("active");
    }else{
      $('.nav li').removeClass('active');
      $('.nav li:eq(3)').addClass("active");
    }
  });

});

$(function(e){
  $('.icon').hover(
    function()
    {
      $(this).removeClass('wow');
      $(this).removeClass('rotateIn');
      $(this).removeClass('animated');
      $(this).removeAttr('style');
      $(this).addClass('swing');
      $(this).addClass('animated');
    },
    function()
    {
      $(this).removeClass('swing');
      $(this).addClass('wow');
      $(this).addClass('rotateIn');
    }
  );
});

$(function(e){
  $('#art').hover(
    function()
    {
      $(this).attr('src' ,'images/drawing_hover.png');
      $(this).removeClass('wow');
      $(this).removeClass('bounceInLeft');
      $(this).removeClass('animated');
      $(this).removeAttr('style');
      $(this).addClass('animated');
      $(this).addClass('rotateIn');
    },
    function()
    {
      $(this).attr('src' ,'images/drawing.png');
      $(this).removeClass('rotateIn');
      $(this).addClass('wow');
    }
  );
  $('#coding').hover(
    function()
    {
      $(this).attr('src' ,'images/coding_hover.png');
      $(this).removeClass('wow');
      $(this).removeClass('bounceInRight');
      $(this).removeClass('animated');
      $(this).removeAttr('style');
      $(this).addClass('animated');
      $(this).addClass('rotateIn');
    },
    function()
    {
      $(this).attr('src' ,'images/coding.png');
      $(this).removeClass('rotateIn');
      $(this).addClass('wow');
    }
  );
});
