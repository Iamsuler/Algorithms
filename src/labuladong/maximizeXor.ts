// 给定数组nums
// 给定二维数组queries，[start, end]
// 求nums比end小，与start异或最大的数

function maximizeXor(nums: number[], queries: number[][]): number[] {
  let result: number[] = [];
  const qLen = queries.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < qLen; i++) {
    const [start, end] = queries[i];
    const maxList = nums.filter((value) => value <= end);
    const mLen = maxList.length;
    let max = -1;

    for (let j = 0; j < mLen; j++) {
      max = Math.max(max, maxList[i] ^ start);
    }

    result.push(max);
  }

  return result;
}

console.log(
  maximizeXor(
    [0, 1, 2, 3, 4],
    [
      [3, 1],
      [1, 3],
      [5, 6],
    ]
  )
);
