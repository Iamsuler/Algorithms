// 给两个数字，第一个是总数n，第二个是划成多少分k，也就是把一个正整数分割成一个递增1的数组。如果划分不了就输出-1。

// 输入样例1：15 5
//     输出：1 2 3 4 5

// 输入样例2:  3 5
// 	输出： -1

function nowcoder1(sum: number, n: number): -1 | number[] {
  if (sum < n) {
    return -1;
  }
  let res: number[] = [];
  let halfN = Math.ceil(n / 2);
  let min = Math.floor(sum / n) - halfN;
  min = min < 0 ? 0 : min;
  let right = 0;

  while (right < 2 * halfN) {
    res.push(min + right);

    if (res.length === n) {
      let temp = res.reduce((a, b) => a + b, 0)
      if (temp > sum) {
        return -1;
      } else if (temp === sum) {
        return res;
      } else {
        res.shift();
      }
    }
    right++;
  }

  return -1;
}
console.log(nowcoder1(15, 5));
console.log(nowcoder1(24, 3));