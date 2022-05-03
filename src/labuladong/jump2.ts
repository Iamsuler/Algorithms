// 跳跃游戏
// 给定一个数组，每一项为最远能跳几步，现保证能跳到最后
// 求最少步数
// [2,3,1,1,4] => 2

function jump2(nums: number[]): number {
  let len = nums.length;
  let memo = new Array(len).fill(len);
  function dp(nums: number[], p: number): number {
    if (p >= len - 1) return 0;
    if (memo[p] !== len) return memo[p];

    let step = nums[p];

    for (let i = 1; i <= step; i++) {
      let sub = dp(nums, p + i);
      memo[p] = Math.min(sub + 1, memo[p]);
    }

    return memo[p];
  }

  return dp(nums, 0);
}

function jump3(nums: number[]): number {
  const len = nums.length;
  // 站在索引 i 最多能跳到索引 end
  let end = 0;
  // 从[i, end]起跳，最远能到的举例
  let farthest = 0;
  let step = 0;

  for (let i = 0; i < len; i++) {
    farthest = Math.max(farthest, nums[i] + i);

    if (end === i) {
      step++;
      end = farthest;
    }
  }

  return step;
}

let step2 = jump2([2, 3, 1, 1, 4]);
console.log(step2);
