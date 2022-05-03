// 环形排列情况
// 给定非负整数数组nums，每个元素代表房子中的现金金额，房子为环形，收尾相接
// 可以从房子中取钱，但有约束条件，相邻房子的前不能同时被取出。
// 举例：[2, 3, 2] => 3
// dp定义 dp[i]为从i~len+1间房子能取到的最多现金

function robRange(nums: number[], start: number, end: number): number {
  const len = nums.length;
  let dp1 = 0;
  let dp2 = 0;
  let res = 0;

  for (let i = end; i >= start; i--) {
    res = Math.max(
      dp1, // 不取当前房子，则等于前一间房子的值
      dp2 + nums[i] // 取，则等于前两间房子加上当前价值
    );
    dp2 = dp1;
    dp1 = res;
  }

  return res;
}

// 三种情况
// 1. 首尾都不取 1 ~ n - 2
// 2. 只取首0 ~ n - 2
// 3. 只取尾1 ~ n - 1
// 很明显2，3都包含了第一种情况，所以只比较第2，3
function robCircle(nums: number[]): number {
  const len = nums.length;
  return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1));
}

console.log(robCircle([2, 3, 2]));
