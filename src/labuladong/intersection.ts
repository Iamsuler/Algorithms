// 给定数组1，和数组2，求数组1不包含数组2的部分

function intersection(nums1: number[], nums2: number[]): number[] {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  nums1.sort((a, b) => b - a);
  nums2.sort((a, b) => b - a);
  const len2 = nums2.length;
  const len1 = nums1.length;

  let j = len2 - 1;
  let i = len1 - 1;
  while (i >= 0 && j >= 0) {
    const cur1 = nums1[i];
    const cur2 = nums2[j];

    if (cur1 === cur2) {
      j--;
      i--;
    } else if (cur1 > cur2) {
      j--;
    } else {
      nums1.splice(i, 1);
      i--;
    }
  }

  return i >= 0 ? nums1.splice(0, i + 1) : nums1;
}

console.log(intersection([1, 2, 3], [1, 1]));
