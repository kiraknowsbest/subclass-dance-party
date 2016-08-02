$(document).ready(function() {
  var DancerMakerFunction = window['MakeBlinkyDancer'];

  var sharkAttack = window['sharkBait'];

  $('.sharkBait').on('click', function(event) {
    $('.shark').animate({
      bottom: "17.5%",
      left: "50%"
      
    }, 500);
    $('.shark').animate({
      left: "5%",
    }, 400);
    $('.shark').animate({
      bottom: "1%",
      
    }, 2000);
    $('.shark').animate({
      left: "60%",
      
    }, 500);
  });

  $('.addWaveButton').on('click', function(event) {

	var waves = ['images/tsunami.png'];
    var waveNode = "<img src=\"" + waves[0] + "\" class=\"wave\">";
    $("body").append(waveNode);

    $(".wave").animate({
      left: "105%"
    }, 3000);
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    //console.log(waves[0]);
  });

  setInterval(function() {

    // random num between 70, 80 - yPos



    var height = 20; //20
    var width = 20; //20
    var speed = 8000;
    var yPos = Math.floor(Math.random() * 11) + 70;

    var cloud = new Cloud(width, height, speed, yPos);
    cloud.add();
    cloud.fly();


  }, 3500);

  $('.cloudsButton').on('click', function(event) {

    var height = 20; //20
    var width = 20; //20
    var speed = 8000;
    var yPos = 74;

    var cloud = new Cloud(width, height, speed, yPos);
    console.log(cloud);
    cloud.add();
    cloud.fly();
  });



  // var waves = [];
  // var numWaves = 100;
  //var waterMakerFunction = $(this).data('dancer-maker-function-name');

  // get the maker function for the kind of dancer we're supposed to make
  

  // make a dancer with a random position
  // for ( var i = 0; i < numWaves; i++ ) {
  //   var dancer = new DancerMakerFunction(
  //     $('body').height() * .5,
  //     $('body').width() * i / numWaves
  //   );
  //   waves.push(dancer);
  //   $('body').append(dancer.$node);
  // }
  //console.log(waves[0]);


  // var makeWave = function() {
  //   // for (var i = 0; i < waves.length; i++) {
  //   //   //console.log('test', waves[i].$node[0]);
      
  //   //   setTimeout(function() {
  //   //     console.log(i)
  //   //     var top = parseInt(waves[i].$node[0].style.top);
  //   //     top -= 20;
  //   //     waves[i].$node[0].style.top = top + 'px';
  //   //   }, 1000);
  //   // }
  //   var count = 0;
  //   var recurse = function(count, upOrDown) {
  //     if (count >= numWaves) {
  //       return;
  //     } else {
  //       var top = parseInt(waves[count].$node[0].style.top);
  //       if (upOrDown === 'up') {
  //         top -= 20;
  //       } else if (upOrDown === 'down') {
  //         top += 20;
  //       }
        
  //       waves[count].$node[0].style.top = top + 'px';
  //       count ++;
  //       setTimeout(function() { recurse(count); }, 20);
  //     }
  //   };

  //   recurse( count, 'up');
  //   var count2 = 0;
  //   setTimeout( function() { recurse(count, 'down') }, 500);

  //   console.dir(waves[34].$node[0]);
  // };


});

