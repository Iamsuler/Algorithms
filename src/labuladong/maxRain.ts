// 高效接雨水问题
// 输入一个非负整数nums，nums[i]代表柱子高度，计如果下雨了，计算这些柱子最多能装多少水
// 举例：nums = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]  ==> 6

// function maxRain(nums: number[]): number {
//   let ans = 0;
//   const len = nums.length;
//   const l_max: number[] = []; // i左侧最高柱子
//   const r_max: number[] = []; // i右侧最高柱子

//   l_max[0] = nums[0];
//   r_max[len - 1] = nums[len - 1];

//   for (let i = 1; i < len; i++) {
//     l_max[i] = Math.max(nums[i], l_max[i - 1]);
//   }
//   for (let i = len - 2; i >= 0; i--) {
//     r_max[i] = Math.max(nums[i], r_max[i + 1]);
//   }

//   for (let i = 1; i < len - 1; i++) {
//     ans += Math.min(l_max[i], r_max[i]) - nums[i];
//   }

//   return ans;
// }

function maxRain(nums: number[]): number {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }

  let l_max = nums[0];
  let r_max = nums[len - 1];
  let left = 1;
  let right = len - 1;
  let ans = 0;

  while (left <= right) {
    l_max = Math.max(nums[left], l_max);
    r_max = Math.max(nums[right], r_max);

    if (l_max < r_max) {
      ans += l_max - nums[left];
      left++;
    } else {
      ans += r_max - nums[right];
      right--;
    }
  }

  return ans;
}

console.log(maxRain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
