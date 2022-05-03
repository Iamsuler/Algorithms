// 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

// function climbStairs(n: number): number {
//   const cache: Record<number, number> = {};

//   function dp(n: number): number {
//     if (cache[n]) {
//       return cache[n];
//     }
//     if (n <= 2) {
//       return n;
//     }

//     return dp(n - 1) + dp(n - 2);
//   }

//   return dp(n);
// }

function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  let cache1 = 1;
  let cache2 = 2;
  let res = 0;

  for (let i = 3; i <= n; i++) {
    res = cache1 + cache2;
    cache1 = cache2;
    cache2 = res;
  }

  return res;
}

console.log(climbStairs(5))