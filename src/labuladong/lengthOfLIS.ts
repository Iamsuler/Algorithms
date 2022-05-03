// 最长递增子序列
// dp定义 dp[i]为nums[i]结尾的最长递增子序列的长度

function lengthOfLIS(nums: number[]): number {
  // base case
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
