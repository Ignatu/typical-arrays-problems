
exports.min = array => array.length && Math.min(...array);


exports.max = function max (array) {
  const arrayLength = array.length;

  return arrayLength && array.reduce((m,el)=> Math.min(m,el), Infinity)
}

exports.avg = function avg (array) {
  const arrayLength = array.length;

  return arrayLength && array.reduce((s,el)=> s + el) / arrayLength;
}
