function foldTo(distance) {
  if(distance <= 0) return null;
  var t = 0.0001;
  var fold = 0;

  while(t < distance){
    t *= 2;
    fold++;
  }
  return fold;
}