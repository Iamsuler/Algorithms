// 字符串排列
// 输入两个字符串s,t，判断s中是否包含t的全排列
// 举例：s = 'helloworld' t = 'oow'  => true // owo

function minWindow(s: string, t: string): boolean {
  let right = 0;
  let left = 0;
  let need: Map<string, number> = new Map();
  let windows: Map<string, number> = new Map();
  let valid = 0;

  for (let str of t) {
    if (need.has(str)) {
      let value = need.get(str)! + 1;
      need.set(str, value);
    } else {
      need.set(str, 1);
      windows.set(str, 0);
    }
  }

  while (right < s.length) {
    let inStr = s[right];
    right++;

    if (need.has(inStr)) {
      windows.set(inStr, windows.get(inStr)! + 1);
      if (windows.get(inStr) === need.get(inStr)) valid++;
    }

    while (right - left >= t.length) {
      if (valid === need.size) {
        return true;
      }
      let outStr = s[left];

      left++;
      if (need.has(outStr)) {
        if (windows.get(outStr) === need.get(outStr)) valid--;
        windows.set(outStr, windows.get(outStr)! - 1);
      }
    }
  }
  return false;
}

const str = minWindow("ADOBECODEBANC", "BA");
console.log(str);
