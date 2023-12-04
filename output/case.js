function scopeOne() {
  var ref1 = "This is a constant binding";
  becauseNothingEverChangesTheValueOf(ref1);
  function scopeTwo() {
    var ref2 = "This is *not* a constant binding";
    ref2 = "Because this changes the value";
  }
}