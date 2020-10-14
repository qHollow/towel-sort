
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let answ = [];
  if(matrix === undefined) return [];
  matrix.forEach((item, i) => i % 2 === 0 ? answ.push(item) : answ.push(item.reverse()));
  return answ.flat();
}
