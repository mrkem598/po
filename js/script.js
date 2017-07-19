$(document).ready(function() {

/* if ($(window).width() >= 768) {
  $(window).scroll(function(){
      $("#aboutContainer1").css("opacity", 1 - $(window).scrollTop() / 250);
    });
} */

/* I decided not to go witht he fade-out code above, to keep the user focused on the content, instead of on the effect. */

$(function(){
      $(".element").typed({
        strings: ["<span>Hi, I'm Adam, thanks for visiting!</span>"],
        typeSpeed: 0,
        contentType: "html"
      });
  });

});
