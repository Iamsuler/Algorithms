// 编程 | 100分】 最大山体面积
// 你现在参加一个数字地图项目，数字地图以二维网格形式数字化，每一个网格是长宽都为1个单位，该网格内的数值表示该单位区域的平均高度。
// 如果高度为0说明是平地，高度大于0说明是凸起的山地。
// 所有互相连接(横竖方向才算相连，斜线方向不算)的凸起高地构成了山脉(体)。
// 你的工作是计算给定二维数字网格中最大的山脉(体)的体积。
// 该山脉(体)的体积为其连通区域内高度数值相加。
// 解答要求

// 时间限制：C/C++ 1000ms，其他语言：2000ms
// 内存限制：C/C++ 256MB，其他语言：512MB
// 输入描述：
// 第一行输入二维数字地图的宽度和长度W和L，以空格分隔，W和H的范围是[5,100]。

// 接下来输入L行，每行W个数字的二维数字地图高度，以空格分隔，高度的数字范围是[0,1000]

// 输出描述：
// 输出一个正整数，是给定输入的二维数字地图中最大山体的体积

// 备注：

// 存在地图上全部为平地或者山体的情况

// 输入示例：
// 示例 1：
// 输入

// 5 5
// 0 1 1 0 0
// 0 1 1 0 0
// 0 0 0 0 0
// 0 0 1 2 3
// 0 0 1 3 9
// 输出

// 19

// 解释：

// 其中有2块连续的山体，分别是[1、1、1、1]和[1、2、3、1、3、9],所以体积最大的山体是第2个，

// 其体积V=1+2+3+1+3+9=19，所以最终输出为19。

// 示例 2：
// 输入

// 6 6
// 1 0 1 0 2 0
// 0 0 0 0 1 0
// 0 2 5 0 0 0
// 0 1 2 0 0 0
// 0 0 1 1 0 0
// 0 0 0 0 0 0
// 输出

// 12

function nowcoder_mountain(matrix: number[][]): number {
  const row = matrix.length;
  const col = matrix[0].length;
  const res: number[] = [];

  function nowcoder_mountain_dp(matrix: number[][], i: number, j: number, res: number[]) {
    if (i < 0 || i >= row || j < 0 || j >= col || matrix[i][j] === 0) {
      return;
    }

    res[res.length - 1] += matrix[i][j];
    matrix[i][j] = 0;
    nowcoder_mountain_dp(matrix, i + 1, j, res);
    nowcoder_mountain_dp(matrix, i - 1, j, res);
    nowcoder_mountain_dp(matrix, i, j - 1, res);
    nowcoder_mountain_dp(matrix, i, j + 1, res);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] !== 0) {
        res.push(0);
        nowcoder_mountain_dp(matrix, i, j, res);
      }
    }
  }

  return Math.max(...res);
}

// console.log(nowcoder_mountain(
//   [
//     [1, 0, 1, 0, 2, 0],
//     [0, 0, 0, 0, 1, 0],
//     [0, 2, 5, 0, 0, 0],
//     [0, 1, 2, 0, 0, 0],
//     [0, 0, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0]
//   ]
// ));
console.log(nowcoder_mountain(
  [
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 2, 3],
    [0, 0, 1, 3, 9]
  ]
));