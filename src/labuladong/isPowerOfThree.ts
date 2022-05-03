// 3的幂
// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

// 示例
// 输入: 27
// 输出: true
// 输入: 45
// 输出: false

// function isPowerOfThree(n: number): boolean {
//   if (n === 1) {
//     return true;
//   }

//   if (n <= 0) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 3 !== 0) {
//       return false;
//     } else {
//       n = n / 3;
//     }
//   }

//   return true;
// }

function isPowerOfThree(n: number): boolean {
  if (n === 1) {
    return true;
  }

  if (n <= 0) {
    return false;
  }

  if (n % 3 === 0) {
    return isPowerOfThree(n / 3);
  }

  return false;
}

console.log(isPowerOfThree(6));
