// 时间管理
// 给定二位数组
// 求不相交区间个数
// [[1,3], [2,4], [3,6]]

function intervalSchedule(nums: [number, number][]): number {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  // 按end排序
  nums.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let end = nums[0][1];
  for (let i = 1; i < len; i++) {
    const [start] = nums[i];

    if (start >= end) {
      count++;
      end = nums[i][1];
    }
  }

  return count;
}

console.log(
  intervalSchedule([
    [1, 3],
    [2, 4],
    [3, 6],
  ])
);
