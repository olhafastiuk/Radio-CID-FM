var slider = document.getElementById("MyRange");

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(246,129,34)' + x + '%, rgb(233,233,233)' + x +'%)';
    slider.style.background = color; 

})

$('.header__lang-wrapp').click( function(){
    $('.header__lang').toggleClass('change-lang');
});
$('.menu__lang-wrapp').click( function(){
    $('.menu__lang').toggleClass('change-lang');
});

$('.header__play').click( function(){
    $('.header__play-btn').toggleClass('play');
});

$('.top__inner__play').click( function(){
    $('.top__inner__play-btn').toggleClass('playBig');
});

$('.carousel').flickity({
    arrowShape: {
      x0: 20,
      x1: 60, y1: 50,
      x2: 60, y2: 50,
      x3: 20
    }
  });

$('.menu').click( function(){
    $('.header__menu-btn').toggleClass('menu-open');
});
