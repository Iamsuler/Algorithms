function canFinishWeight(
  weights: number[],
  cap: number,
  days: number
): boolean {
  let i = 0;
  const len = weights.length;
  for (let d = 1; d <= days; d++) {
    let maxCap = cap;
    while ((maxCap -= weights[i]) >= 0) {
      i++;
      if (i === len) {
        return true;
      }
    }
  }

  return false;
}

function shipWithinDays(weights: number[], days: number): number {
  let max = weights.reduce((a, b) => a + b, 0) + 1;

  for (let cap = 0; cap < max; cap++) {
    if (canFinishWeight(weights, cap, days)) {
      return cap;
    }
  }

  return max;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
