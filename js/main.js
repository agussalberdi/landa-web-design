$(document).ready(function() {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 75) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  $("[data-link]").click(function() {
    var name = $(this).data("link");
    var off = $("section#" + name).offset().top;
    $("html, body").animate({ scrollTop: off - 100 }, 500);
    if (window.innerWidth <= 900) {
      $(".hamburger, header").removeClass("is-active");
    }
  });

  $(".hamburger").click(function() {
    if ($("header").hasClass("is-active")) {
      $(".hamburger, header").removeClass("is-active");
    } else {
      $(".hamburger, header").addClass("is-active");
    }
  });
});
