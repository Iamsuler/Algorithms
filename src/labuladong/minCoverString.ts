// 最小覆盖子串
// 给定两个字符串s1,s2，请在s1中找出包含s2的最短子串
// 举例： s1='ADBECFEBANC' s2='ABC' 返回BANC

function minCoverString(s1: string, s2: string): string {
  let left = 0;
  let right = 0;
  const len2 = s2.length;
  const len1 = s1.length;
  const needs = new Map();
  const windows = new Map();
  let valid = 0;

  // 记录覆盖子串的起始索引和长度
  let start = 0;
  let len = len1 - 1;

  // 保存s2需要的字符数
  for (let i = 0; i < len2; i++) {
    const cur = s2[i];
    const count = needs.has(cur) ? needs.get(cur) + 1 : 1;
    needs.set(cur, count);
  }

  while (right < len1) {
    // 右移窗口
    const rightStr = s1[right];
    right++;

    // 进行窗口数据更新
    if (needs.has(rightStr)) {
      const winCount = windows.has(rightStr) ? windows.get(rightStr) + 1 : 1;
      windows.set(rightStr, winCount);
      if (needs.get(rightStr) === winCount) {
        valid++;
      }
    }

    // 判断窗口是否要收缩
    while (valid === needs.size) {
      // 更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      // 左移窗口
      const leftStr = s1[left];
      left++;

      // 更新窗口
      if (needs.has(leftStr)) {
        if (needs.get(leftStr) === windows.get(leftStr)) {
          valid--;
        }
        windows.set(leftStr, windows.get(leftStr) - 1);
      }
    }
  }

  return len === len1 ? "" : s1.substring(start, start + len);
}

console.log(minCoverString("ADBECFEBANC", "ABC"));
