function moveZeroes(nums: number[]): number[] {
  const len = nums.length;
  let fast = 0;
  let slow = 0;

  while (fast < len) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }

    fast++;
  }

  return nums;
}

console.log(moveZeroes([2, 1, 0, 3, 12]));
