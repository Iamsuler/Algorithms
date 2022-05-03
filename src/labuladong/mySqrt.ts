// x的平方根
// 实现 int sqrt(int x) 函数。即计算并返回 x 的平方根，其中 x 是非负整数，由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去

// 输入: 8
// 输出: 2
// 解释: 8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

function mySqrt(n: number): number {
  let start = 1;
  let end = Math.floor(n / 2) + 1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    const res = mid * mid;
    if (res === n) {
      return mid;
    } else if (res > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

console.log(mySqrt(8));
