module.exports = function reverse (n) {
    n = Math.abs(n);
  str=n.toString();
  let rez = '';
  for(i=str.length - 1; i >= 0; i--){
      rez += str[i];
  }
  rez = parseInt(rez);
  return rez;
}
