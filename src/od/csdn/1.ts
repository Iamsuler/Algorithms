//        如果三个正整数A B C ,A²+B²=C²则为勾股数
// 如果ABC之间两两互质，即A与B A与C B与C均互质没有公约数，
// 则称其为勾股数元组。
//        请求出给定n m 范围内所有的勾股数元组
//        输入描述
//          起始范围 1<n<10000    n<m<10000
//        输出目描述
//           abc 保证a<b<c输出格式  a b c
//           多组勾股数元组 按照a升序b升序 c升序的排序方式输出。
//           给定范围内，找不到勾股数元组时，输出  Na

// 案例
//  输入
//   1
//   20
//  输出
//   3 4 5
//   5 12 13
//   8 15 17

//  输入
//    5
//    10
//  输出
//    Na

// 【笔记】

// 关键点

// 1. a b 互质，即 a 和 b 的公约数==1

// 这里用阿基里德算法（辗转相除法），递归方式，如果最后结果==1，表示a,b 互质

// gcd(a,b) = gcd(b, a%b)

// 2. i，j，k 用穷举法得出，满足条件 i<j<k，且 i,j,k 两两互质

// 求公约数
function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

function resolve1(n: number, m: number): Array<[number, number, number]> | null {
  const res: Array<[number, number, number]> = [];
  for (let i = n; i <= m; i++) {
    for (let j = i + 1; j <= m; j++) {
      if (gcd(i, j) !== 1) {
        continue;
      }
      const k = Math.sqrt((i ** 2) + (j ** 2));
      if (!Number.isInteger(k) || k > m) {
        continue;
      }
      if (gcd(i, k) === 1 && gcd(j, k) === 1) {
        res.push([i, j, k]);
      }
    }
  }

  return res.length ? res : null;
}

console.log(resolve1(1, 20));
