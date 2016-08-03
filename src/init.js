$(document).ready(function() {
  var DancerMakerFunction = window['MakeBlinkyDancer'];

  var sharkAttack = window['sharkBait'];

  var allClouds = [];

  $('.sharkBait').on('click', function(event) {
    $('.shark').animate({
      bottom: "-4.5%",
      left: "75%"
      
    }, 500);
    $('.shark').animate({
      left: "5%",
    }, 400);
    $('.shark').animate({
      bottom: "-34%",
      
    }, 2000);
    $('.shark').animate({
      left: "90%",
      
    }, 10);
  });

  $('.addWater').on('click', function(event) {

    var waves = [];
    var numWaves = 100;

    //make a dancer with a random position
    for ( var i = 0; i < numWaves; i++ ) {
      var dancer = new MakeBlinkyDancer(
        $('body').height() * .5,
        $('body').width() * i / numWaves
      );
      waves.push(dancer);
      $('body').append(dancer.$node);
    }

    var makeWave = function() {
      for (var i = 0; i < waves.length; i++) {
        
        setTimeout(function() {
          var top = parseInt(waves[i].$node[0].style.top);
          top -= 20;
          waves[i].$node[0].style.top = top + 'px';
        }, 1000);

      }
    };

  });

  $('.addWaveButton').on('click', function(event) {
    var waves = ['images/tsunami.png'];
    var waveNode = "<img src=\"" + waves[0] + "\" class=\"wave\">";
    $("body").append(waveNode);

    $(".wave").animate({
      left: "105%"
    }, 3000);
    $('.canvas').animate({

    }, 500);
  });

  // var addInitialClouds = function() {

  //   var width = 20;
  //   var speed = 16000;
  //   var yPos, xPos;

  //   for (var i = 0; i < 5; i++) {
  //     yPos = Math.floor(Math.random() * 11) + 70;
  //     xPos = Math.floor(Math.random() * 100);
      
  //     var cloud = new Cloud(width, speed, yPos, xPos);
  //     cloud.add();
  //     cloud.fly();
  //     console.log(cloud);
  //   } 

  // };
  // addInitialClouds();
  
  // var interval = setInterval(function() {
  //   $('.cloud').css('left', '105%');

  //   $('.cloud').animate({
  //     left: '-40%'
  //   }, 8000);

  // }, 9000);

  $('.cloudsButton').on('click', function(event) {
    var height = 20;
    var width = 20;
    var speed = 4000;
    yPos = Math.floor(Math.random() * 11) + 70;
    xPos = Math.floor(Math.random() * 31);
    var cloudOrStorm = Math.round(Math.random());
    if ( cloudOrStorm > 0 ) {
      yPos -= 10; 
      var storm = new Storm( width, speed, yPos, xPos );
      allClouds.push(storm);
      storm.add();
      storm.fly();
    } else {
      var cloud = new Cloud(width, speed, yPos, xPos);
      allClouds.push(cloud);
      cloud.add();
      cloud.fly();
    }
  });

  $('.boatsButton').on('click', function(event) {
    $('.pirate').toggle();
    $('.sail').toggle();
    $('body').css('background-image', '');
  });

  $('.lineupButton').on('click', function(event) {
    event.preventDefault();
    var allClouds = document.getElementsByClassName('cloud');
    var spread = 100 / allClouds.length;
    for ( var i = 0; i < allClouds.length; i++ ) {
      allClouds[i].style.left = i * spread + '%';
      allClouds[i].style.bottom = 75 + '%';
    }

  });

  $('.mouse').on('mouseenter', function() {
    $('.canvas').animate({bottom: '-32%'}, 500);
  });
  $('.mouse').on('mouseleave', function() {
    $('.canvas').animate({bottom: '-28%'}, 500);
  });
    //$('.canvas').animate({bottom: '-34%'}, 1000);

});

