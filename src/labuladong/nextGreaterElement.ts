// 下一个更大的元素
// 给定一个数组，返回一个等长数组，对应索引存储下一个跟大元素
// 例如：nums = [2,1,2,4,3]  ==> [4,2,4,-1,-1]

function nextGreaterElement(nums: number[]): number[] {
  const res: number[] = [];
  const len = nums.length;
  const queen: number[] = [];

  for (let i = len - 1; i >= 0; i--) {
    const cur = nums[i];
    while (queen.length && queen[queen.length - 1] <= cur) {
      queen.pop();
    }

    res[i] = queen.length ? queen[queen.length - 1] : -1;
    queen.push(cur);
  }
  return res;
}

// 环形数组
function nextGreaterElementInCircle(nums: number[]): number[] {
  const res: number[] = [];
  const len = nums.length;
  const queen: number[] = [];

  for (let i = 2 * len - 1; i >= 0; i--) {
    const curIndex = i % len;
    const cur = nums[curIndex];

    while (queen.length && queen[queen.length - 1] <= cur) {
      queen.pop();
    }

    res[curIndex] = queen.length ? queen[queen.length - 1] : -1;
    queen.push(cur);
  }

  return res;
}

console.log(nextGreaterElementInCircle([2, 1, 2, 4, 3]));
