// 以最小插入次数构造回文串
// 定义dp: 对于s[i][j]至少需要dp[i][j]插入构成回文字符串
// base base i = j时 dp[i][j] = 0
// s[i] = s[j]时， dp[i][j] = dp[i - 1][j - 1];
// s[i] != s[j]时， dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]) + 1 ;
function minInsertions(s: string): number {
  const len = s.length;
  const dp = Array.from(new Array(len), () => new Array(len).fill(0));

  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[0][len - 1];
}

console.log(minInsertions("abcea"));
