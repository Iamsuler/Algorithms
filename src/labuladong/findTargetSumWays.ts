// 给定非负整数数组nums和target，可以给每个元素添加+，-号，计算有几种符号组合能使nums的元素和为target
// 举例nums = [1,3,1,4,2] target = 5 ==> 3

function findTargetSumWays(nums: number[], target: number) {
  const len = nums.length;
  let result = 0;

  function backtrack(nums: number[], i: number, rest: number) {
    if (i === len) {
      if (rest === 0) {
        result++;
      }

      return;
    }

    const cur = nums[i];

    // 选择+
    // rest -= cur;
    backtrack(nums, i + 1, rest - cur);
    // rest += cur;

    // 选择-
    // rest += cur;
    backtrack(nums, i + 1, rest + cur);
    // rest -= cur;
  }

  backtrack(nums, 0, target);

  return result;
}

console.log(findTargetSumWays([1, 3, 1, 4, 2], 5));
