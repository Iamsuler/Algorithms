// 最小编辑距离
// 给定两个字符串s1和s2，计算将s1转换成s2最少需要多少次操作
// 操作如下：插入，删除，替换

function minDistance(word1: string, word2: string): number {
  let memo = new Map<string, number>();
  function dp(i: number, j: number): number {
    const key = `${i}-${j}`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }
    // base case当一个字符串遍历完成后，返回另一个字符串的长剩余度
    if (i === -1) {
      return j + 1;
    }
    if (j === -1) {
      return i + 1;
    }

    if (word1[i] === word2[j]) {
      memo.set(key, dp(i - 1, j - 1));
    } else {
      const res = Math.min(
        dp(i - 1, j) + 1, // delete
        dp(i, j - 1) + 1, // insert
        dp(i - 1, j - 1) + 1 // replace
      );
      memo.set(key, res);
    }

    return memo.get(key)!;
  }

  return dp(word1.length - 1, word2.length - 1);
}

// function minDistance(word1: string, word2: string): number {
//   let len1 = word1.length;
//   let len2 = word2.length;
//   let dp = new Array(len1 + 1);
//   for (let i = 0; i <= len1; i++) {
//     dp[i] = [i];
//   }
//   for (let i = 0; i <= len2; i++) {
//     dp[0][i] = i;
//   }

//   for (let i = 1; i <= len1; i++) {
//     for (let j = 1; j <= len2; j++) {
//       if (word1[i - 1] === word2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else {
//         dp[i][j] = Math.min(
//           dp[i - 1][j - 1] + 1,
//           dp[i][j - 1] + 1,
//           dp[i - 1][j] + 1
//         );
//       }
//     }
//   }

//   return dp[len1][len2];
// }

console.log(minDistance("intention", "execution"));
