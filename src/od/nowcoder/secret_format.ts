// 【密钥格式化】

// 题目描述：

// 给定一个非空字符串 S，其被 N 个'-'分隔成 N+1 的子串，给定正整数 K，要求除第一个子串外，其余的串每 K 个用'-'分隔，并将小写字母转换为大写。

// 输入描述：

// 正整数 K 和‘-’分割的字符串，如：

// 2
// 25G3C-abc-d
// 输出描述：

// 转换后的字符串

// 示例 1：

// 输入：

// S = "5F3Z-2e-9-w", K = 4
// 输出：

// "5F3Z-2E9W"
// 解释：

// 字符串 S 被分成了两个部分，每部分 4 个字符； 注意，两个额外的破折号需要删掉。

// 示例 2：

// 输入：

// S = "2-5g-3-J", K = 2
// 输出：

// "2-5G-3J"
// 解释： 字符串 S 被分成了 3 个部分，按照前面的规则描述，第一部分的字符可以少于给定的数量，其余部分皆为 2 个字符。

function nowcoder_secret_format(s: string, num: number): string {
  s = s.toUpperCase();
  const arr = s.split('-');
  let res = arr[0];
  let temp = arr.slice(1).join('');
  const len = temp.length;
  let count = 0;
  let tempS = '-';

  for (let i = 0; i < len; i++) {
    count++;
    tempS += temp[i];

    if (count === num) {
      count = 0;
      res += tempS;
      tempS = '-';
    }
  }
  res = tempS === '-' ? res : res + tempS;
  return res;
}

console.log(nowcoder_secret_format('5F3Z-2e-9-w', 4));
console.log(nowcoder_secret_format('2-5g-3-j', 2));