// 最大子数组

function maxSumSubArray(nums: number[]): number {
  const len = nums.length;
  // const dp = new Array(len).fill(0);
  let prev = nums[0];
  let res = prev;

  for (let i = 1; i < len; i++) {
    let cur = Math.max(nums[i], nums[i] + prev);
    prev = cur;
    res = Math.max(res, prev);
  }

  return res;
}

console.log(maxSumSubArray([-3, 1, 3, -1, 2, -4, 2]));
