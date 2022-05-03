// 跳跃游戏
// 给定一个数组，每一项为最远能跳几步
// 求能否调到最后
// [2,3,1,1,4] => true   [3,2,1,0,4] => false

function jump(nums: number[]): boolean {
  let len = nums.length;
  let farthest = 0;
  for (let i = 0; i < len; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (farthest <= i) {
      return false;
    }
  }

  return farthest >= len - 1;
}
