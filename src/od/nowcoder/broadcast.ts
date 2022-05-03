// 题目描述
// 服务器连接方式包括直接相连，间接连接。
// A 和 B 直接连接， B 和 C 直接连接，则 A 和 C 间接连接。直接连接和间接连接都可以发送广播。
// 给出一个 N * N 数组，代表 N 个服务器， matrix[i][j] == 1 ，则代表 i 和 j 直接连接；
// 不等于 1 时，代表 i 和 j 不直接连接。 matrix[i][i]== 1 ，即自己和自己直接连接。
// matrix[i][j]==matrix[j][i] 。
// 计算初始需要给几台服务器广播，才可以使侮个服务器都收到广播。

// [[1,1,0],[1,1,0],[0,0,1]]  => 2
// [[1,0,1,0,1,1],[0,1,0,0,0,0],[1,0,1,0,0,0],[0,0,0,1,0,0],[1,0,0,0,1,0],[1,0,0,0,0,1]] => 

function nowcoder_broadcast(matrix: number[][]): number {
  let len = matrix.length;
  let res: Set<number>[] = [];

  for (let i = 0; i < len; i++) {
    // 标记：判断当前节点是否已经被记录（已属于已有的某个连通分量）
    let flag = false;
    // 当前所指向的连通分量
    let temp: Set<number> | null = null;

    for (const set of res) {
      // 若在连通分量数组中找到，表示该节点已经与之前的节点连通，那么与该节点连通的节点，也与之前的节点间接连通
      if (set.has(i)) {
        temp = set;
        flag = true;
        break;
      }
    }

    if (!flag) {
      // 如果未找到，则创建一个新的set：表示一个新的连通分量
      temp = new Set<number>();
      temp.add(i);
      res.push(temp);
    }

    for (let j = i + 1; j < len; j++) {
      if (matrix[i][j] === 1) {
        temp?.add(j);
      }
    }
    
  }

  return res.length;
}

// 2
// console.log(nowcoder_broadcast([
//   [1,1,0],
//   [1,1,0],
//   [0,0,1]
// ]));
// 
console.log(nowcoder_broadcast([
  [1,0,1,0,1,1],
  [0,1,0,0,0,0],
  [1,0,1,0,0,0],
  [0,0,0,1,0,0],
  [1,0,0,0,1,0],
  [1,0,0,0,0,1]
]));