// 求子集
// 输入一个不包含重复数字的数组，，输出这些数字的所有子集
// 举例：nums = [1,2,3] => [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const track: number[] = [];
  const len = nums.length;
  function backtrack(nums: number[], track: number[], start: number) {
    result.push([...track]);

    for (let i = start; i < len; i++) {
      track.push(nums[i]);
      backtrack(nums, track, ++start);
      track.pop();
    }
  }
  backtrack(nums, track, 0);

  return result;
}

console.log(subsets([1, 2, 3]));
