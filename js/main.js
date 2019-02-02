document.addEventListener("DOMContentLoaded", function() {
  let wrapper = document.getElementById("wrapper");
  let topLayer = wrapper.querySelector(".top");
  let handle = wrapper.querySelector(".handle");
  let skew = 0;
  let delta = 0;

  if (wrapper.className.indexOf("skewed") != -1) {
    skew = 1000;
  }

  wrapper.addEventListener("mousemove", function(e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";
  });
});

// Responsive Nav
$(function() {
  menu = $("nav ul");

  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

// Smooth Scrolling
$(".cf a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
