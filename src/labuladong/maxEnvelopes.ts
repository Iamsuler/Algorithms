function maxEnvelopes(envelopes: number[][]): number {
  // 按宽度排序
  envelopes.sort(([prevWidth, prevHeight], [nextWidth, nextHeight]) => {
    if (prevWidth === nextWidth) {
      return nextHeight - prevHeight;
    } else {
      return prevWidth - nextWidth;
    }
  });

  // 按高度求最长递增子序列
  let dp = new Array(envelopes.length).fill(1);
  for (let i = 0; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ])
);
