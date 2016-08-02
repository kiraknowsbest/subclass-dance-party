$(document).ready(function() {
  window.dancers = [];

  $('.addWaveButton').on('click', function(event) {
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
    var waves = [];
    waves.length = 100;

    var waterMakerFunction = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var DancerMakerFunction = window[waterMakerFunction];

    // make a dancer with a random position
    for ( var i = 0; i < waves.length; i++ ) {
      var dancer = new DancerMakerFunction(
        $('body').height() * .5,
        $('body').width() * i / 100,
        Math.random() * 100000000
      );
      $('body').append(dancer.$node);
    }


  });
});

