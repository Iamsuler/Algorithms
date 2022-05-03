// pow(x, n)
// 实现 pow(x, n) ，即计算 x 的 n 次幂函数

// 输入: 2.00000, 10
// 输出: 1024.00000

// 输入: 2.00000, -2
// 输出: 0.25000
// 解释: 2-2 = 1/22 = 1/4 = 0.25

// function myPow(n: number, m: number): number {
//   let result = 1;

//   if (m === 0) {
//     return result;
//   }

//   const base = m > 0 ? n : 1 / n; // 通过正负号，确认参与幂运算的底数

//   for (let i = 0; i < Math.abs(m); i++) {
//     result *= base;
//   }

//   return result;
// }

// 但是暴力计算会在指数较大时超时，这时我们发现比如计算 ，我们使用分治法，只需要计算出  的值做相乘，便可以得出  的值。 那么计算 的值，又可以拆解为 ，以此类推……
function myPow(n: number, m: number): number {
  if (m === 0) {
    return 1;
  } else if (m === 1) {
    return n;
  } else if (m === -1) {
    return 1 / n;
  }

  const half = Math.floor(m / 2);
  const result = myPow(n, half);

  // 如果 n 是奇数，则需要额外乘以一次底数
  if (m % 2) {
    const base = m > 0 ? n : 1 / n; // 通过正负号，确认参与幂运算的底数
    return base * result * result;
  }

  // 如果 n 是偶数，则直接返回折半计算的乘积
  return result * result;
}

console.log(myPow(2, 3));
