var Cloud = function(width, height, speed, yPos) {
  this.width = width;
  this.height = height;
  this.speed = speed;
  this.yPos = yPos;
  this.xPos = 105;
};
//appends cloud to page
Cloud.prototype.add = function() {
  //width, height yPos
  var cloud = '<img class="cloud" src="Images/cloud.png">';

  var cloudsArr = document.getElementsByClassName('cloud');
  console.log(cloudsArr);
  //$('body').remove($('cloudsArr[4]''));

  // if ( number of clouds is > 4) {
  //   clouds.delete node from the tree
  // }


  $('body').append( cloud );
  $('.cloud').css({
    width: this.width + '%',
    height: this.height + '%',
    left: this.xPos + '%'
  });
  $('.cloud').animate({
    bottom: this.yPos + '%'
  }, 2000);
};
// makes the cloud move
Cloud.prototype.fly = function () {
  //speed
  $('.cloud').animate({
    left: '-40%'
  }, this.speed);
};