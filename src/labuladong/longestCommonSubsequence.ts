// 最长公共子序列
// 举例s1 = 'abcde' s2 = 'aceb' 输出3，最长公共子序列是ace
function longestCommonSubsequence(text1: string, text2: string): number {
  let len1 = text1.length;
  let len2 = text2.length;
  if (len1 === 0 || len2 === 0) return 0;
  // dp[i][j]定义，对于s1[0...i-1],s2[0,i-1]，它们的LCS长度为dp[i][j]
  let dp = [];
  // dp[0][...], dp[...][0]为0
  for (let i = 0; i <= len2; i++) {
    dp.push(new Array(len1 + 1).fill(0));
  }

  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (text2[i - 1] === text1[j - 1]) {
        // 相等，则在公共子序列中
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + 1;
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j], // s1[i]不在lcs中
          dp[i][j - 1] // s2[j]不在lcs中
          // dp[i - 1][j - 1] //都不在lcs中，必然最小
        );
      }
    }
  }
  console.log(dp);
  return dp[len2][len1];
}

console.log(longestCommonSubsequence("babcde", "ace"));
