/*
        输入一个英文文章片段
        翻转指定区域的单词顺序
        标点符号和普通字母一样处理
        例如输入字符串 I am a developer.
        [0,3]
        则输出 developer. a am I

        输入描述
         使用换行隔开3个参数
         第一个参数为文章内容 即英文字符串
         第二个参数为翻转起始单词下标，下标从0开始
         第三个参数为结束单词下标

         输出描述

         翻转后英文文章片段每个单词之间以一个半角空格分割输出

         例子

          输入
           I am a developer.
           0
           3
          输出
           I a am developer.

          输入
            hello world!
          0
          3
          输出
          world! hello

输入字符串可以在前面或者后面包含多个空格
但是翻转后的字符不能包括

指定反转区间只有一个单词
或无有效单词
则输出EMPTY
*/

function resolve8(start: number, end: number, str: string): string {
  let sArr = str.trim().split(' ');
  let len = sArr.length;
  let startArr: string[] = [];
  let midArr: string[] = [];
  let endArr: string[] = [];

  for (let i = 0; i < len; i++) {
    let cur = sArr[i];
    if (i < start) {
      startArr.push(cur)
    } else if (i >= start &&  i <= end) {
      midArr.push(cur);
    } else {
      endArr.push(cur);
    }
  }

  return [...startArr, ...midArr.reverse(), ...endArr].join(' ');

  // return [...sArr.slice(0, start), ...sArr.slice(start, end + 1).reverse(), ...sArr.slice(end + 1)].join(' ');
}

console.log(resolve8(0, 3, 'I am a js developer.'));
console.log(resolve8(0, 3, 'I am a developer.'));
console.log(resolve8(0, 3, '  hello world!'));
