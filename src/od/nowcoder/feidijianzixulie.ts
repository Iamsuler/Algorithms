/**
 * 最长的非递减连续子序列的长度
 * 
 * abc2234019A334bc  =>  2234，长度为4，输出长度。
 */

function feidijianzixulie(s: string): number {
  let res = 0;
  let len = s.length;
  let last = 0;
  let max = 0;

  for (let i = 0; i < len; i++) {
    let cur = Number(s[i]);

    if (Number.isNaN(cur)) {
      last = 0;
      res = Math.max(res, max);
      max = 0;
    } else {
      if (cur >= last) {
        max++;
      } else {
        res = Math.max(res, max);
        max = 1;
      }
      last = cur;
    }
  }

  return Math.max(res, max);
}

console.log(feidijianzixulie('abc2234012356A334bc012356668'));