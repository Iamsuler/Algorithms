// 可装载重量为w,n个物品，wt为物品重量，val为价值，最多能装的价值是多少
// dp[i][w]定义对于前i个物品，当前背包容量为w，可以装下的最大价值
function maxBag(w: number, n: number, wt: number[], val: number[]): number {
  let dp: number[][] = Array.from(new Array(n + 1), () =>
    new Array(w + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      if (j - wt[i - 1] < 0) {
        // 背包容量不够，只能选择不装入背包
        dp[i][j] = dp[i - 1][j];
      } else {
        // 装入或者不装入择优
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - wt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  return dp[n][w];
}

console.log(maxBag(4, 3, [2, 1, 3], [4, 2, 3]));
