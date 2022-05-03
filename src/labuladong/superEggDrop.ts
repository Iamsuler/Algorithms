// 给定k个鸡蛋，n层楼，现在确定这层楼存在0 <= f <= n鸡蛋从f层扔下去，恰好没碎
// 求最快情况下，至少要扔几次鸡蛋

// function superEggDrop(k: number, n: number): number {
//   let memo: Record<string, number> = {};
//   function dp(k: number, n: number) {
//     if (k === 1) return n;
//     if (n === 0) return 0;
//     let key = `${k}${n}`;
//     if (memo[key]) return memo[key];
//     let res = Number.MAX_SAFE_INTEGER;
//     for (let i = 1; i <= n; i++) {
//       res = Math.min(
//         res,
//         Math.max(
//           dp(k - 1, i - 1), // 碎了
//           dp(k, n - i) //没碎
//         ) + 1
//       );
//     }
//     memo[key] = res;
//     return res;
//   }

//   return dp(k, n);
// }

// dp定义: dp[k][m] 为k个鸡蛋，扔m次，能确定的楼层最高层数
function superEggDrop(k: number, n: number): number {
  let dp = Array.from(new Array(k + 1), () => new Array(n + 1).fill(0));
  // 次数
  let m = 0;

  while (dp[k][m] < n) {
    m++;
    for (let i = 1; i <= k; i++) {
      // dp[i][m - 1]没碎，楼上的楼层
      // dp[i - 1][m - 1]碎了，楼下的楼层
      dp[i][m] = dp[i][m - 1] + dp[i - 1][m - 1] + 1;
    }
  }

  return m;
}

console.time("egg");
console.log(superEggDrop(2, 6));
console.timeEnd("egg");
