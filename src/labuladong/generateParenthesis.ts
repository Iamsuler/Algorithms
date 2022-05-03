// 输入正整数n，输出所有的合法括号组合

// function generateParenthesis(n: number): string[] {
//   const res: string[] = [];
//   if (n === 0) {
//     return res;
//   }
//   const track: string = "";

//   function backtrack(
//     left: number,
//     right: number,
//     track: string,
//     res: string[]
//   ) {
//     if (left > right) {
//       return;
//     }
//     if (left === 0 && right === 0) {
//       res.push(track);
//       return;
//     }

//     if (left > 0) {
//       backtrack(left - 1, right, track + "(", res);
//     }

//     if (right > 0) {
//       backtrack(left, right - 1, track + ")", res);
//     }
//   }

//   backtrack(n, n, track, res);

//   return res;
// }

function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  if (n === 0) {
    return res;
  }
  const track: string = "";

  function backtrack(
    left: number,
    right: number,
    track: string,
    res: string[]
  ) {
    if (left > right) {
      return;
    }
    if (left === 0 && right === 0) {
      res.push(track);
      return;
    }

    if (left > 0) {
      track += "(";
      backtrack(left - 1, right, track, res);
      track = track.slice(0, -1);
    }

    if (right > 0) {
      track += ")";
      backtrack(left, right - 1, track, res);
      track = track.slice(0, -1);
    }
  }

  backtrack(n, n, track, res);

  return res;
}

console.log(generateParenthesis(3));
