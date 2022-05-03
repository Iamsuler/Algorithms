// 输入nums和target，请返回nums中能凑出target的两个元素值
// 举例 nums = [1，3，5，6] target = 9  => [3, 6]
// 不能重复 nums = [1，3，1, 2, 2, 3] target = 4  => [[1, 3], [2, 2]]

function towSumTarget(nums: number[], target: number): [number, number][] {
  // 排序
  nums.sort((a, b) => a - b);
  const res: [number, number][] = [];
  // 定义所有指针
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const left = nums[low];
    const right = nums[high];
    const sum = left + right;

    if (sum > target) {
      high--;
    } else if (sum < target) {
      low++;
    } else {
      res.push([left, right]);
      while (low < high && nums[low] === left) {
        low++;
      }
      while (low < high && nums[high] === right) {
        high--;
      }
    }
  }

  return res;
}

console.log(towSumTarget([1, 3, 1, 2, 2, 3], 4));
