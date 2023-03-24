const divs = document.querySelectorAll(".div");

divs.forEach(div => {
  div.addEventListener("mouseenter", e => {
    divs.forEach(d => {
      d.style.transform = "scale(1)";
    });

    e.target.style.transform = "scale(1.1)";
  });

  div.addEventListener("mouseleave", e => {
    e.target.style.transform = "scale(1)";
  });
});

(function($){
  new WOW().init();
})(jQuery);