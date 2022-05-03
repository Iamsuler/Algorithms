// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 例如, 给定数组 nums = [-1, 0, 0, 1, 1, 2, 2, -1, -4]，

// 满足要求的三元组集合为：
// [ [ -4, 2, 2 ], [ -1, -1, 2 ], [ -1, 0, 1 ] ]

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const res: number[][] = [];

  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const leftValue = nums[left];
      const rightValue = nums[right];
      const sum = cur + leftValue + rightValue;

      if (sum === 0) {
        res.push([cur, leftValue, rightValue]);

        // 这两步是为了去重
        while (left < len && leftValue === nums[left]) {
          left++;
        }
        while (right > left && rightValue === nums[right]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }

      while (i + 1 < len && nums[i + 1] === cur) {
        i++;
      }
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 0, 1, 1, 2, 2, -1, -4]));
