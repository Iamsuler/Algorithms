// 排列
// 输入一个不包含重复数字的数组nums，返回这些数字的全部排列
// 举例：nums = [1,2,3] => [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  const len = nums.length;

  function backtrack(track: number[]) {
    if (track.length === len) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < len; i++) {
      const cur = nums[i];
      if (track.includes(cur)) {
        continue;
      }
      track.push(nums[i]);
      backtrack(track);
      track.pop();
    }
  }

  backtrack(track);

  return res;
}

console.log(permute([1, 2, 3]));
