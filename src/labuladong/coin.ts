// 零钱兑换二
// 给定不同面的硬币coins，和一个总金额amount，计算出可以凑成总金额的硬币组合数
// 假设每种面额硬币无限
// 例如amount = 5， coins = [1，2，5] ==> 4
// 例如amount = 5， coins = [5] ==> 1

// 状态 可选择的硬币，剩余容量
// 选择  选择硬币或者不选择
// dp定义：若只使用前i个硬币，当容量为j时，有dp[i][j]种方法
// base case dp[0][...] = 0, dp[...][0] = 1
function change(coins: number[], amount: number): number {
  const len = coins.length;
  const dp = Array.from(new Array(len + 1), () =>
    new Array(amount + 1).fill(0)
  );
  for (let i = 0; i <= len; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      }
    }
  }

  return dp[len][amount];
}

console.log(change([1, 2, 5], 5));
