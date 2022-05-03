/*
  单词接龙的规则是
  可用于接龙的单词 首字母必须要与前一个单词的尾字母相同
  当存在多个首字母相同的单词时，取长度最长的单词
  如果长度也相等，则取字典序最小的单词
  已经参与接龙的单词不能重复使用
  现给定一组全部由小写字母组成的单词数组
  并指定其中一个单词为起始单词
  进行单词接龙
  请输出最长的单词串
  单词串是单词拼接而成的中间没有空格

  输入描述
  输入第一行为一个非负整数
  表示起始单词在数组中的索引k
  0<=k<N
  输入的第二行为非负整数N
  接下来的N行分别表示单词数组中的单词

  输出描述，
  输出一个字符串表示最终拼接的单词串

  示例
  0
  6
  word
  dd
  da
  dc
  dword
  d

  输出
  worddwordda
  说明 先确定起始单词word 在接dword
  剩余dd da dc 则取da

  示例2
  4
  6
  word
  dd
  da
  dc
  dword
  d

  输出
  dwordda

  单词个数1<N<20
  单个单词的长度  1~30

*/

function isSmall(s1: string, s2: string): boolean {
  let len = s1.length;
  for (let i = 1; i < len; i++) {
    let c1 = s1[i].charCodeAt(0);
    let c2 = s2[i].charCodeAt(0);

    if (c1 === c2) {
      continue;
    }

    return c1 < c2;
  }

  return false;
}

function resolve16(start: number, strs: string[]): string {
  let [s1] = strs.splice(start, 1);

  while (true) {
    let endS = s1.charAt(s1.length - 1);
    let temp = '';
    let index = 0;

    for (let i = 0; i < strs.length; i++) {
      let cur = strs[i];
      if (cur.startsWith(endS)) {
        if (cur.length < temp.length) {
          continue;
        }
        if (cur.length > temp.length) {
          index = i;
          temp = cur;
        } else if (!isSmall(temp, cur)) {
          index = i;
          temp = cur;
        }
      }
    }

    if (temp === '') {
      break;
    }

    s1 += temp;
    strs.splice(index, 1)
  }

  return s1;
}

console.log(resolve16(0, ['word', 'dd', 'da', 'dc', 'dword', 'd']));
console.log(resolve16(4, ['word', 'dd', 'da', 'dc', 'dword', 'd']));