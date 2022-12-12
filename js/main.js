$(document).ready(function() {
    $(".skitter-large").skitter({
        auto_play:true,
        interval:1000,

    });

    $(".owl-carousel").owlCarousel({
        items:5,
        loop:true,
        margin:5,
        center:true,
    });
  });

  function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);


  var typed = new Typed('.heba', {

    strings: ['Plugin Examples', 'Of the Java Script'],
    loop:true,
    cursorChar:"",
    startDelay:300,
    typeSpeed:50
  });

  new WOW().init();



  var particles = Particles.init({
	selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true,
  
});