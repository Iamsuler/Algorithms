// 删除数组中重复元素，
// 原地删除

function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }

  let slow = 0;
  let fast = 1;
  while (fast < len) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }

    fast++;
  }

  // 删除重复元素
  const length = slow + 1;
  nums.length = length;
  return length;
}

console.log(removeDuplicates([0, 1, 1, 2, 3, 3, 4]));
