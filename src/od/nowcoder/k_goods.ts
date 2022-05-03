// 2.一排包装箱从1编号，各个包装箱存放的货物数组成一个集合M={M1,M2,…,Mn}
// 货车一次最多运送K件货物
// 小王想一次从中挑选K的整数倍件货物，再分批运输。
// 仓库管理员为了方便要求小王必须选择连续的包装箱，比如可选择1、2、3号箱，不能选2、4、6
// 如果运输K整数倍件货物，请帮小王计算有多少种挑选方式
// 输入：
// 包装箱数N，货车最大一次运送的数量为K件
// 各个箱子存放的货物M1，M2，M3。。。
// 输入为两行：N K
// M1 M2 M3。。。
// N和K取值范围为[1,100000]
// 第i个包装箱存放货物的取值范围也是[1,100000]
// 输出：一行输出有多少种方式，如果不存在可行的方式，输出0
// ————————————————
// 版权声明：本文为CSDN博主「此人受打击，决定去力扣历练」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_41928947/article/details/114651358

function nowcoder_k_goods(nums: number[], k: number): number {
  const len = nums.length;
  const sums: number[] = new Array(len).fill(0);
  const sumsMap: Record<number, number> = {};
  sumsMap[0] = 1;

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      sums[i] = nums[i] % k;
    } else {
      sums[i] = (sums[i - 1] + nums[i]) % k;
    }
    sumsMap[sums[i]] = sumsMap[sums[i]] ? sumsMap[sums[i]] + 1 : 1;
  }

  let res = 0;
  for (let i = 0; i < k; i++) {
    // n(n - 1)/2 是组合公式
    res = res + sumsMap[i] * (sumsMap[i] - 1) / 2;
  }

  return res;
}

console.log(nowcoder_k_goods([1, 2, 3, 4, 5, 6], 4));