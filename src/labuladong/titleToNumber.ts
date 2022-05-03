// Excel表列序号
// 给定一个Excel表格中的列名称，返回其相应的列序号。

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// 输入: "A",
// 输出: 1
// 输入: "AB",
// 输出: 28

function titleToNumber(s: string): number {
  const ACode = 'A'.charCodeAt(0) - 1;
  let curry = 1;
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const cur = s.charCodeAt(i) - ACode;
    res += cur * curry;
    curry *= 26;
  }

  return res;
}

console.log(titleToNumber('AB'));
