var MakeBlinkyDancer = function(top, left) {
  MakeDancer.call(this, top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.makeWave = function () {

};

// MakeBlinkyDancer.prototype.step = function() {
  
//   // call the old version of step at the beginning of any call to this new version of step.
//   MakeDancer.prototype.step.call(this);
//   this.$node.toggle();

//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
// };



