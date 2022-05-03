function lengthOfLongestSubstring(s: string): number {
  let res = 0;
  let left = 0;
  let right = 0;
  let windows: Record<string, number> = {};

  while (right < s.length) {
    let inStr = s[right];
    right++;

    windows[inStr] = windows[inStr] ? windows[inStr] + 1 : 1;

    while (windows[inStr] > 1) {
      let outStr = s[left];
      left++;
      windows[outStr] = windows[outStr] - 1;
    }

    res = Math.max(res, right - left);
  }

  return res;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
