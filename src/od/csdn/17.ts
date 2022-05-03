/*
    给定一个字符串
    只包含大写字母
    求在包含同一字母的子串中
    长度第K长的子串
    相同字母只取最长的子串

    输入
     第一行 一个子串 1<len<=100
     只包含大写字母
     第二行为k的值

     输出
     输出连续出现次数第k多的字母的次数

     例子：
     输入
             AABAAA
             2
     输出
             1
       同一字母连续出现最多的A 3次
       第二多2次  但A出现连续3次

    输入

    AAAAHHHBBCDHHHH
    3

    输出
    2

//如果子串中只包含同一字母的子串数小于k

则输出-1

 */

function resolve17(s: string, n: number): number {
  let len = s.length;
  let last = s[0];
  let count = 1;
  let cache: Record<string, number> = {
    [last]: count
  };

  for (let i = 1; i < len; i++) {
    let cur = s[i];
    if (cur === last) {
      count++;
    } else {
      count = 1;
      last = cur;
    }

    cache[last] = !cache[last] ? count : cache[last] > count ? cache[last] : count;
  }

  let res = Object.values(cache).sort((a, b) => b - a);

  return res.length < n ? -1 : res[n - 1];
}

console.log(resolve17('AABAAA', 2));
console.log(resolve17('AAAAHHHBBCDHHHH', 3));