// 【分子弹】

// 题目描述：

// 射击训练，需要给每个士兵发子弹，发子弹的个数规则是根据士兵的训练成绩给定的，传入士兵的训练成绩，要求相邻士兵中，成绩好的士兵的子弹数必须更多，每个士兵至少分配一个子弹。

// 输入描述：

// 输入每个士兵的训练成绩，如 1,2,3，代表 3 位士兵的成绩分别为 1,2,3

// 输出描述：

// 最少分配的子弹数

// 示例 1：

// 输入：

// 1,2,2
// 输出：

// 4

function nowcoder_bullet(nums: number[]): number {
  const len = nums.length;
  let count = len;

  // 只要相邻不相等就多发一颗子弹
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      count++;
    }
  }

  // 如果中间评分同时高于两边的，减一颗子弹，因前面多给了一颗
  for (let i = 1; i < len - 1; i++) {
    const cur = nums[i];
    if (cur > nums[i - 1] && cur > nums[i + 1]) {
      count--;
    }
  }

  return count;
}

console.log(nowcoder_bullet([1, 2, 2]))
console.log(nowcoder_bullet([1, 0, 3, 2]))