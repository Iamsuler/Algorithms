/*
  一辆运送快递的货车
  运送的快递放在大小不等的长方体快递盒中
  为了能够装载更多的快递同时不能让货车超载
  需要计算最多能装多少个快递
  注：快递的体积不受限制
  快递数最多1000个
  货车载重最大50000
  输入描述
    第一行输入每个快递的重量
    用英文逗号隔开
    如 5,10,2,11
    第二行输入货车的载重量
    如 20
  输出描述
    输出最多能装多少个快递
    如 3
    示例一
    输入
    5,10,2,11
    20
    输出
    3
*/

// function resolve14(nums: number[], max: number): number {
//   let res: number[] = [];
//   let track: number[] = [];
//   let len = nums.length;

//   function dp(start: number, track: number[]) {
//     if (track.reduce((a, b) => a + b, 0) > max) {
//       return;
//     }
//     if (track.length > res.length) {
//       res = [...track];
//     }
//     for (let i = start; i < len; i++) {
//       track.push(nums[i])
//       dp(i + 1, track);
//       track.pop();
//     }
//   }

//   dp(0, track);

//   return res.length;
// }

function resolve14(nums: number[], max: number): number {
  let maxCount: number = 0;
  // let res: number = 0;
  let len = nums.length;

  function dp(start: number, sum: number, count: number) {
    if (sum > max) {
      return;
    }
    if (count > maxCount) {
      // res = sum;
      maxCount = count;
    }
    for (let i = start; i < len; i++) {
      let cur = nums[i];
      sum += cur;
      count++;
      dp(i + 1, sum, count);
      sum -= cur;
      count--;
    }
  }

  dp(0, 0, maxCount);

  return maxCount;
}

console.log(resolve14([5, 10, 2, 11], 20))