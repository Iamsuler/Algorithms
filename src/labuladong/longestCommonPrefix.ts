// 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 思路
// 查找 n 个字符串的最长公共前缀，可以拆分成两步： 1. 查找前 n-1 个字符串的最长公共前缀 m 2. 查找 m 与最后一个字符串的公共前缀
// 因此，我们可以得到递归公式：
// $longestCommonPrefix([S1, S2, ..., Sn]) = findCommPrefix(longestCommonPrefix([S1, S2, ..., Sn-1]), Sn)$
// 我们只需要实现 findCommPrefix 方法，然后遍历数组即可。

function longestCommonPrefix(strs: string[]): string {
  function findCommonPrefix(s1: string, s2: string): string {
    let i = 0;
    const l1 = s1.length;
    const l2 = s2.length;
    while (i < l1 && i < l2 && s1[i] === s2[i]) {
      i++;
    }

    return i === 0 ? '' : s1.substring(0, i);
  }
  if (strs.length > 0) {
    let commonPrefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
      commonPrefix = findCommonPrefix(commonPrefix, strs[i]);
    }

    return commonPrefix;
  }

  return '';
}

console.log(longestCommonPrefix(['flower']));
