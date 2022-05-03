// 题目描述：
// 给定两个整数数组array1 array2，数组元素按升序排列假设从arr1 arr2中分别取出一个元素，可构成一对元素。
// 现在需要取出k对元素，并对取出的所有元素求和，计算和的最小值。
// 注意：两对元素对应arr1 arr2的下标是相同的视为同一对元素
// 输入描述:
// 输入两行数组arr1 arr2
// 每行首个数字为数组大小size 0<size<=100
// arr1，2中的每个元素 0<arr[i]<1000
// 接下来一行 正整数k 0<k<=arr1.size * arr2.size

// 3 1 1 2
// 3 1 2 3
// 2

//  => 4

// ————————————————
// 版权声明：本文为CSDN博主「小朱小朱绝不服输」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_44052055/article/details/123969116

function nowcoder_k_min_sum(nums1: number[], nums2: number[], k: number): number {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let res: number[] = [];

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      res.push(nums1[i] + nums2[j])
    }
  }

  res.sort((a, b) => a - b);

  return res.slice(0, k).reduce((a, b) => a + b);
}

console.log(nowcoder_k_min_sum(
  [3, 1, 1, 2],
  [3, 1, 2, 3],
  2
));