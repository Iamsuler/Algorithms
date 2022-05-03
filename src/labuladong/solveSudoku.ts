function isValidSudoku(board: string[][]) {
  // 三个方向判重
  const [rows, columns, boxes]: [
    Record<string, boolean>,
    Record<string, boolean>,
    Record<string, boolean>
  ] = [{}, {}, {}];
  // 遍历数独
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== ".") {
        // 子数独序号:0~8，一共9个
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        // 如果当前数已经在某个位置出现过了，返回false
        if (
          rows[i + "-" + num] ||
          columns[j + "-" + num] ||
          boxes[boxIndex + "-" + num]
        ) {
          return false;
        }
        // 三个方向上每个位置，将当前数做标记，表示出现过了
        rows[i + "-" + num] = true;
        columns[j + "-" + num] = true;
        boxes[boxIndex + "-" + num] = true;
      }
    }
  }
  return true;
}

function isValid(
  board: string[][],
  row: number,
  col: number,
  char: string
): boolean {
  for (let i = 0; i < 3; i++) {
    if (board[row][i] === char) {
      return false;
    }
    if (board[i][col] === char) {
      return false;
    }
    if (board[row + Math.floor(i / 3)][col + (i % 3)] === char) {
      return false;
    }
  }

  return true;
}
function solveSudoku(board: string[][]): boolean {
  const len = board.length;
  function backtrack(board: string[][], i: number, j: number): boolean {
    // 遍历一行之后，开始下一行
    if (j === len) {
      return backtrack(board, i + 1, 0);
    }

    if (i === len) {
      return true;
    }

    // 如果是预设数字，继续下一个
    if (board[i][j] !== ".") {
      return backtrack(board, i, ++j);
    }

    for (let index = 1; index <= 9; index++) {
      const char = index.toString();

      // 做选择
      board[i][j] = char;

      if (!isValidSudoku(board)) {
        board[i][j] = ".";
        continue;
      }

      // 继续穷举
      if (backtrack(board, i, ++j)) {
        return true;
      }

      // 撤销选择
      board[i][j] = ".";
    }

    return false;
  }

  return backtrack(board, 0, 0);
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(solveSudoku(board));
