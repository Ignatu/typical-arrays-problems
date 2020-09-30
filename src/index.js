
exports.min = array =>
if (array = []){
    return 0;} else {
array.length && Math.min(...array);}


exports.max = array => array.length && Math.max(...array);


exports.avg = function avg (array =[] ) {
  const arrayLength = array.length;

  return arrayLength && array.reduce((s,el)=> s + el) / arrayLength;
}
