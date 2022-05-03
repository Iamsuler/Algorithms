// 求给定的字符串是否是合法括号，*号可代表左右括号

function checkValidStringForNull(s: string): boolean {
  let left = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    const curStr = s[i];
    if (curStr === "(") {
      left++;
    } else if (curStr === ")") {
      left--;
    }

    if (left < 0) {
      return false;
    }
  }

  return true;
}

function checkValidStringForParenthesis(
  s: string,
  left: number,
  start: number
): boolean {
  const len = s.length;
  for (let i = start; i < len; i++) {
    const curStr = s[i];
    if (curStr === "(") {
      left++;
    } else if (curStr === ")") {
      left--;
    }

    if (left < 0) {
      return false;
    }
  }

  return left === 0;
}

function checkValidString(s: string): boolean {
  const len = s.length;

  let diff = 0;
  for (let i = 0; i < len; i++) {
    const curStr = s[i];
    if (curStr === "(") {
      diff++;
    } else if (curStr === ")") {
      diff--;
    }
  }

  let result = false;

  function backtrack(s: string, left: number, start: number): boolean {
    if (left < 0) {
      result = false;
      return false;
    }
    const len = s.length;

    for (let i = start; i < len; i++) {
      const curStr = s[i];
      if (curStr === "(") {
        return backtrack(s, left + 1, i + 1);
      } else if (curStr === ")") {
        return backtrack(s, left - 1, i + 1);
      } else {
        return backtrack(s, left - 1, i + 1) || backtrack(s, left + 1, i + 1);
      }
    }
    result = left === 0;
    return left === 0;
  }

  if (diff === 0) {
    return checkValidStringForNull(s);
  }

  result = result || backtrack(s, 0, 0);

  return result;
}

console.log(checkValidString("(((((*)))**"));
