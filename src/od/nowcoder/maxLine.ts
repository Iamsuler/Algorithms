/**
 * 找出矩阵中最长的一条线，这条线可以是水平垂直对角反对角四种情况
 */
/*
4 4
F,M,M,M
F,F,M,F
F,M,F,M
M,F,F,F
3
4 4
M,M,M,F
M,F,F,F
M,F,F,M
M,F,F,M
4 4
M,M,M,M
F,M,F,F
F,F,M,M
F,F,F,F
4 4
M,M,M,F
F,M,F,F
F,F,M,M
F,F,F,M
*/

function maxLine(matrix: string[][]): number {
  let rowLen = matrix.length + 2;
  let colLen = matrix[0].length + 2;
  let max = 0;
  let hDp = Array.from(new Array(rowLen), () => new Array(colLen).fill(0));
  let vDp = Array.from(new Array(rowLen), () => new Array(colLen).fill(0));
  let xDp = Array.from(new Array(rowLen), () => new Array(colLen).fill(0));
  let yDp = Array.from(new Array(rowLen), () => new Array(colLen).fill(0));

  for (let i = 1; i < rowLen - 1; i++) {
    for (let j = 1; j < colLen - 1; j++) {
      let cur = matrix[i - 1][j - 1];

      if (cur === 'M') {
        hDp[i][j] = hDp[i][j - 1] + 1;
        vDp[i][j] = vDp[i - 1][j] + 1;
        xDp[i][j] = xDp[i - 1][j - 1] + 1;
        yDp[i][j] = yDp[i - 1][j + 1] + 1;
      }

      max = Math.max(max, hDp[i][j], vDp[i][j], xDp[i][j], yDp[i][j])
    }
  }

  return max;
}
const F = 'F';
const M = 'M'
// console.log(maxLine(
//   [
//     [F,M,M,M],
//     [F,F,M,F],
//     [F,M,F,M],
//     [M,F,F,F]
//   ]
// ));
// console.log(maxLine(
//   [
//     [M,M,M,M],
//     [F,M,F,F],
//     [F,F,M,M],
//     [F,F,F,F],
//   ]
// ));
// console.log(maxLine(
//   [
//     [M,M,M,F],
//     [M,F,F,F],
//     [M,F,F,M],
//     [M,F,F,M],
//   ]
// ));
console.log(maxLine(
  [
    [F,M,M,M],
    [M,F,M,F],
    [F,M,F,M],
    [F,F,M,F],
  ]
));