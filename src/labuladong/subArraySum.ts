// 输入一个整数数组nums和一个整数k,算出nums中一共几个和为k的子数组
// 举例nums = [1, 1, 1, 2] target = 2  => 3 // [1,1],[1,1],[2]

// function subArraySum(nums: number[], target: number): number {
//   const len = nums.length;
//   let res = 0;

//   // 构造前缀和
//   const preSum = new Array(len + 1).fill(0);
//   for (let i = 0; i < len; i++) {
//     preSum[i + 1] = preSum[i] + nums[i];
//   }

//   // 穷举所有子数组
//   for (let i = 1; i <= len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (preSum[i] - preSum[j] === target) {
//         res++;
//       }
//     }
//   }
//   return res;
// }

function subArraySum(nums: number[], target: number): number {
  const len = nums.length;
  const preSum = new Map<number, number>();
  preSum.set(0, 1);

  let ans = 0;
  let sum0_i = 0;
  for (let i = 0; i < len; i++) {
    sum0_i += nums[i];

    let sum0_j = sum0_i - target;
    if (preSum.has(sum0_j)) {
      ans += preSum.get(sum0_j)!;
    }

    preSum.set(sum0_i, 1 + (preSum.get(sum0_i) || 0));
  }

  return ans;
}

console.log(subArraySum([1, 1, 1, 2], 2));
