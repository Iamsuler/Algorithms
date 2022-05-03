// 1.小明抽到字符串，小红抽到一个更长的，小红有限次的替换一个字母为另一个，比如最大替换次数为2
// 请判断小红每次游戏时候能不能成功替换字母从而包含小明的字符串，可以请输出最小替换次数，不可以或者不需要替换输出0；
// 输入三行：第一行小明的字符串
// 第二行小红的字符串（长一些）
// 第三行是最大允许替换次数
// ————————————————
// 版权声明：本文为CSDN博主「此人受打击，决定去力扣历练」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_41928947/article/details/114651358

function nowcoder_str_can_replace(s1: string, s2: string, count: number): number {
  const len1 = s1.length;
  const len2 = s2.length;
  const diff = len2 - len1;
  let minCount = len1;

  for (let i = 0; i <= diff; i++) {
    const s2Temp = s2.substring(i, i + len1);
    let tempDiff = 0;

    for (let j = 0; j < len1; j++) {
      const c1 = s1[j];
      const c2 = s2Temp[j];
      if (c1 === c2) {
        continue;
      }

      tempDiff++;
      if (tempDiff > count) {
        break;
      }
    }

    minCount = Math.min(minCount, tempDiff);
  }

  return minCount > count ? 0 : minCount;
}

console.log(nowcoder_str_can_replace('abba', 'xadbcreyu', 2));