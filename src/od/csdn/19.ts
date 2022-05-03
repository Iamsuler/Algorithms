/*
删除字符串中出现次数最少的字符
如果多个字符出现次数一样则都删除

例子：
输入
  abcdd
  字符串中只
  输出
  dd

输入
  aabbccdd

输出
  empty

  如果都被删除  则换为empty

*/

function resolve19(s: string): string {
  let cache: Record<string, number> = {};
  let len = s.length;

  for (let i = 0; i < len; i++) {
    let cur = s[i];
    cache[cur] = cache[cur] ? cache[cur] + 1 : 1;
  }

  let min = Math.min(...Object.values(cache));

  for (const [key, value] of Object.entries(cache)) {
    if (value === min) {
      let reg = new RegExp(`${key}`, 'g');
      s = s.replace(reg, '');
    }
  }

  return s;
}

console.log(resolve19('aabbccdd'))
console.log(resolve19('abcdd'))
