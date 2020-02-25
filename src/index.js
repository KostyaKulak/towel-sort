
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return [];
  }
  else {
    var i = 0, res = [];
    while (i != matrix.length) {
      if (i % 2 == 0) {
        matrix[i].forEach(el => {
          res.push(el);
        });
      } else {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          res.push(matrix[i][j]);
        }
      }
      i++;
    }
    return res;
  }
}
