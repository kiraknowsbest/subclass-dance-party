var Storm = function(width, speed, yPos, xPos) {
  Cloud.call(this, width, speed, yPos, xPos);
};

Storm.prototype = Object.create(Cloud.prototype);
Storm.prototype.constructor = Storm;

Storm.prototype.add = function() {
  var storm = '<img ';
  storm += 'style="bottom:' + this.yPos + '%;left:' + this.xPos + '%;" '; 
  storm += 'class="cloud" src="Images/stormy-cloud.png">';
  $('body').append( storm );
};