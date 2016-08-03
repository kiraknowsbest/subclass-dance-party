var Cloud = function(width, speed, yPos, xPos) {
  this.width = width;
  this.speed = speed;
  this.yPos = yPos;
  this.xPos = 105 + xPos;
};

//appends cloud to page
Cloud.prototype.add = function() {
  //width, height yPos
  var cloud = '<img ';
  cloud += 'style="bottom:' + this.yPos + '%;left:' + this.xPos + '%;" '; 
  cloud += 'class="cloud" src="Images/cloud.png">';

  $('body').append( cloud );
  // $('.cloud').css({
  //   width: this.width + '%',
  //   left: this.xPos + '%'
  // });
  // $('.cloud').animate({
  //   bottom: this.yPos + '%'
  // }, 2000);
};
// makes the cloud move
Cloud.prototype.fly = function () {
  //speed
  $('.cloud').animate({
    left: '-40%'
  }, this.speed);
  //var $this = $('this');
  //$this.remove();
};


