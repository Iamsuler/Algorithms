// 组合
// 输入两个数字n,k，输出[1...n]中k个数字的所有组合
// 举例： n = 4, k = 2， ==> [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]

function combine(n: number, k: number): number[][] {
  let res: number[][] = [];
  let track: number[] = [];

  function backtrack(start: number, track: number[]) {
    if (track.length === k) {
      res.push([...track]);
      return;
    }
    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(i + 1, track);
      track.pop();
    }
  }

  backtrack(1, track);

  return res;
}

console.log(combine(4, 2));
