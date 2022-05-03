// 最小速度
// 输入正整数数组piles代表N堆香蕉，piles[i]代表每堆香蕉重量，现在要在H小时内吃完
// 吃香蕉的速度为每小时K根，每小时最多吃一堆，吃不完留到下一小时吃，吃完还有胃口也要留到下一小时才吃下一堆
// 求最小速度

function canFinish(piles: number[], speed: number, hour: number): boolean {
  let time = 0;
  piles.forEach((value) => {
    time = time + Math.floor(value / speed) + (value % speed > 0 ? 1 : 0);
  });

  return time <= hour;
}

function minEatingSpeed(piles: number[], hour: number): number {
  let low = 1;
  let high = Math.max(...piles) + 1;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);

    if (canFinish(piles, mid, hour)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}
