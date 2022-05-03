// 括号深度

// 现有一字符串仅由 '('， ')'， '{'， '}'， '['， ']'六种括号组成。 若字符串满足以下条件之一，则为无效字符串：

// ①任一类型的左右括号数量不相等；

// ②存在未按正确顺序（先左后右）闭合的括号。

// 输出括号的最大嵌套深度，若字符串无效则输出 0。 0≤字符串长度≤100000

// 输入描述:

// 一个只包括 '('， ')'， '{'， '}'， '['， ']'的字符串

// 输出描述:

// 一个整数，最大的括号深度

// 示例1

// 输入

// 1
// []
// 输出

// 1
// 1
// 说明

// 有效字符串，最大嵌套深度为1

// 示例 2

// 输入

// 1
// ([]{()})
// 输出

// 1
// 3
// 说明

// 有效字符串，最大嵌套深度为3

// 示例3

// 输入

// 1
// (]
// 输出

// 1
// 0

function nowcoder_brackets_depth(str: string): number {
  const len = str.length;
  let res = 0;
  const leftBrackets = ['(', '{', '['];
  let stack: string[] = [];

  for (let i = 0; i < len; i++) {
    let cur = str[i];

    if (leftBrackets.includes(cur)) {
      stack.push(cur);
    } else {
      let last = stack.pop();

      if ((last === '(' && cur === ')') || (last === '{' && cur === '}') || (last === '[' && cur === ']')) {
        res = Math.max(res, stack.length + 1);
      } else {
        return 0;
      }
    }
  }

  return stack.length === 0 ? res : 0;
}

// console.log(nowcoder_brackets_depth('([]((())){()})'));
// console.log(nowcoder_brackets_depth('(]'));


function nowcoder_brackets_depth2(str: string): number {
  let len = str.length;
  let left = 0;
  let res = 0;

  for (let i = 0; i < len; i++) {
    if (str[i] === '(') {
      res = Math.max(res, ++left);
    } else {
      left--;

      if (left < 0) {
        return 0;
      }
    }
  }

  return left !== 0 ? 0 : res;
}

console.log(nowcoder_brackets_depth2('((())())'));
console.log(nowcoder_brackets_depth2('((())))'));
