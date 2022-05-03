/*
labuladong 书上有提到，大概画了个图，但是尚未完全搞明白

 一天一只顽猴想要从山脚爬到山顶
  途中经过一个有n个台阶的阶梯，但是这个猴子有个习惯，每一次只跳1步或3步
  试问？猴子通过这个阶梯有多少种不同的跳跃方式

  输入描述：
    输入只有一个这个数n    0<n<50
    此阶梯有多个台阶
  输出描述：
    有多少种跳跃方式

  实例:
   输入
     50
   输出
      122106097

   输入
      3
   输出
      2
 */

// function resolve5(n: number): number {
//   const dp: number[] = new Array(n + 1).fill(0);

//   dp[1] = 1;
//   dp[2] = 1;
//   dp[3] = 2;

//   for (let i = 4; i <= n; i++) {
//     dp[i] = dp[i - 3] + dp[i - 1];
//   }

//   return dp[n]
// }

function resolve5(n: number): number {
  let t1 = 1;
  let t2 = 1;
  let t3 = 2;
  let res = 0;

  for (let i = 4; i <= n; i++) {
    res = t3 + t1;
    t1 = t2;
    t2 = t3;
    t3 = res
  }

  return res;
}

console.log(resolve5(50))