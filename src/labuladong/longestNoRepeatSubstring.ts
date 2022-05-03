// 最长无重复子串
// 举例s='aabab' 输出2，ab,ba

function longestNoRepeatSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let len = s.length;
  let res = 1;
  const windows: Record<string, number> = {};

  while (right < len) {
    const rightStr = s[right];
    right++;

    windows[rightStr] = windows[rightStr] ? windows[rightStr] + 1 : 1;

    while (windows[rightStr] > 1) {
      const leftStr = s[left];
      left++;
      windows[leftStr]--;
    }

    res = Math.max(res, right - left);
  }

  return res;
}

console.log(longestNoRepeatSubstring("aababc"));
