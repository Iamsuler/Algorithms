// N次操作最多有几个A
// 四个键 A  C+A  C+C C+V
// n = 3 => 3   n = 7 => 9

// function maxA(count: number): number {
//   let memo = new Map();
//   function dp(n: number, num: number, copy: number): number {
//     const key = `${n}-${num}-${copy}`;
//     if (memo.has(key)) {
//       return memo.get(key);
//     }
//     // base case
//     if (n <= 0) {
//       return num;
//     }

//     const res = Math.max(
//       dp(n - 1, num + 1, copy), // A
//       dp(n - 1, num + copy, copy), // C+V
//       dp(n - 2, num, num) // C+A, C+C
//     );

//     memo.set(key, res);
//     return memo.get(key);
//   }

//   return dp(count, 0, 0);
// }

// 最有按键序列一定只有两种
// N比较小时，一直按A
// N比较大时，先按A，后按C+AC+CC+V...C+V
// 则最后一次按键要么是A，要么时C+V
// 定义dp: dp[i]为第i次按键后A的数量
// 1. dp[i] = dp[i - 1] + 1;
// 2.
function maxA(n: number): number {
  const dp = new Array(n + 1).fill(n + 1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    // 按A
    dp[i] = dp[i - 1] + 1;

    // 按C+V, j表示最后一次按C+A，C+C
    // 全选复制j-2, 连续粘贴i-j次
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j - 2] * (i - j + 1));
    }
  }

  return dp[n];
}

console.log(maxA(7));
