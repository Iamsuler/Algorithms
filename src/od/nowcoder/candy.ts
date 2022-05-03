// 【编程 | 200分】分糖果 II

// 题目描述

// Solo和koko是两兄弟，妈妈给了他们一大袋糖，每块糖上都有自己的重量。现在他们想要将这些糖分成两堆。

// 分糖的任务当然落到了大哥Solo的身上，然而koko要求必须两个人获得的糖的总重量“相等”（根据Koko的逻辑），要不然就会哭的。

// 非常不幸的是，koko还非常小，并且他只会先将两个数转成二进制再进行加法，而且总会忘记进位。

// 如当12（1100）加5（101）时：

// alt

// 于是koko得到的计算结果是9（1001）。

// 此外还有一些例子：

// 5 + 4 = 1
// 7 + 9 = 14
// 50 + 10 = 56
// 现在Solo非常贪婪，他想要尽可能使自己得到的糖的总重量最大，且不让koko哭。

// 输入

// 输入的第一行是一个整数N(2 ≤ N ≤ 15)，表示有袋中多少块糖。
// 第二行包含N个用空格分开的整数Ci (1 ≤ Ci ≤ 10^6)，表示第 i 块糖的重量。
// 输出

// 如果能让koko不哭，输出Solo所能获得的糖的总重量，否则输出“NO”。
// 样例

// 输入样例 1
// 3
// 3 5 6
// 输出样例 1

// 11
// 提示样例 1

// 样例1中，三块糖重量为3、5、6，因为5(101)+6(110)=3(11)，所以Solo拿走了重为5和6的糖，koko则得到了重为3的糖。
// 输入样例 2

// 5
// 1 2 3 4 5
// 输出样例 2

// NO

function getCandyForKoko(n1: number, n2: number): number {
  const s1 = n1.toString(2);
  const s2 = n2.toString(2);
  const len = Math.max(s1.length, s2.length);
  let s = '';

  for (let i = len - 1; i >= 0; i--) {
    const c1 = s1[i];
    const c2 = s2[i];
    if ((c1 === '1' && c2 === '1') || (c1 === '0' && c2 === '0')) {
      s = '0' + s;
    } else if(c1 === undefined || c2 === undefined) {
      s = (c1 || c2) + s;
    } else {
      s = '1' + s;
    }
  }

  return parseInt(s, 2);
}

function nowcoder_candy(candys: number[]): number {
  let max = -1;
  const len = candys.length;

  function dp(start: number, solo: number, soloByKoko: number, koko: number) {
    if (start === len) {
      // 这题有问题，暂时如此处理
      if (soloByKoko !== 0 && koko !== 0 && soloByKoko === koko) {
        max = Math.max(max, solo);
      }

      return;
    }
    const cur = candys[start];
    // 给solo
    dp(start + 1, solo + cur, getCandyForKoko(soloByKoko, cur), koko);

    // 给koko
    dp(start + 1, solo, soloByKoko, getCandyForKoko(koko, cur));
  }

  dp(0, 0, 0, 0);

  return max;
}

console.log(nowcoder_candy([3, 5, 6]));