/*
  给定两个字符串
  从字符串2中找出字符串1中的所有字符
  去重并按照ASCII码值从小到大排列
  输入字符串1长度不超过1024
  字符串2长度不超过100

  字符范围满足ASCII编码要求，按照ASCII由小到大排序

  输入描述：
    bach
    bbaaccddfg
    输出
    abc

    2
    输入
    fach
    bbaaccedfg
    输出
    acf

*/

function resolve10(s1: string, s2: string): string {
  let a1 = [...new Set(s1.split(''))];
  let a2 = [...new Set(s2.split(''))];
  let res: string[] = [];

  let cache: Record<string, boolean> = {};

  for (let i = 0; i < a1.length; i++) {
    cache[a1[i]] = true;
  }

  for (let i = 0; i < a2.length; i++) {
    let cur = a2[i];
    if (cache[cur]) {
      res.push(cur);
    }
  }

  return res.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}

console.log(resolve10('bach', 'bbaaccddfg'));
console.log(resolve10('fach', 'bbaaccedfg'));
