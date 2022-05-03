function replaceStringByIndex(str: string, i: number, target: string): string {
  let strArr = str.split("");
  strArr[i] = target;
  return strArr.join("");
}

function solveNQueens(n: number): string[][] {
  let board: string[] = new Array(n).fill(".".repeat(n));
  let res: string[][] = [];
  function isValid(
    board: string[],
    row: number,
    col: number,
    n: number
  ): boolean {
    // 检查列中是否有冲突
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // 检查右上方是否有冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    // 检查左上方是否有冲突
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }
  function traceback(board: string[], row: number) {
    if (row === n) {
      res.push([...board]);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col, n)) {
        continue;
      }
      board[row] = replaceStringByIndex(board[row], col, "Q");
      traceback(board, row + 1);
      board[row] = replaceStringByIndex(board[row], col, ".");
    }
  }
  traceback(board, 0);
  return res;
}

solveNQueens(4);
