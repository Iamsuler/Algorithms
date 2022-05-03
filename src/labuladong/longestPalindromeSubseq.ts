// 最长回文子序列
// 举例：s = 'abcda'，输出3，最长回文子序列为aca
// dp[i][j]定义：在子串s[i][j]中，最长回文子序列的长度为dp[i][j]

function longestPalindromeSubseq(s: string): number {
  const len = s.length;
  let dp = Array.from(new Array(len), () => new Array(len).fill(0));
  // base case
  for (let index = 0; index < len; index++) {
    dp[index][index] = 1;
  }
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][len - 1];
}

console.log(longestPalindromeSubseq("abcda"));
