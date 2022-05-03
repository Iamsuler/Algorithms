// 全排列
// 给定数组，求出所有排列组合
function traverse(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  const len = nums.length;

  function backtrack(nums: number[], track: number[]) {
    // 出发条件
    if (track.length === len) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < len; i++) {
      // 排除不合法排列
      if (track.includes(nums[i])) continue;

      // 做选择
      track.push(nums[i]);

      // 进入下一层决策树
      backtrack(nums, track);

      // 取消选择
      track.pop();
    }
  }

  backtrack(nums, track);
  return res;
}

console.log(traverse([1, 2, 3]));
