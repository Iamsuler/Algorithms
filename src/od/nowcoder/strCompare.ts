// 作者：天堂的鸽子
// 链接：https://www.nowcoder.com/discuss/643535?type=0&order=0&pos=28&page=1&channel=-1&source_id=discuss_tag_nctrack
// 来源：牛客网

// 题⽬描述：
// 给定字符串 A ， B 和正整数 V ， A 的⻓长度与 B 的⻓长度相等，请计算 A 满⾜如下条件的最⼤ 连续⼦串的⻓长度： 1、该连续⼦串在 A 和 B 中的位置和⻓长度均相同。 2、该连续⼦串 |A[i]-B[i]| 之和⼩于等于 V ，其中 |A[i]-B[i]| 表示两个字⺟ ASCII 码之差的绝对值。 输⼊描述： 输⼊为三⾏： 第⼀⾏为字符串 A ，仅包含⼩写字符， 。 第⼀⾏为字符串 B ，仅包含⼩写字符， 。 第⼀⾏为正整数 V ， 。

// 输出描述：
// 字符串最⼤连续⼦串的⻓长度，要求该⼦串 |A[i]-B[i]| 之和⼩于等于 V 。

// 输⼊：
// xxcdefg
// cdefghi
// 5

// 输出：
// 2

function nowcoder_str_compare(s1: string, s2: string, abs: number): number {
  let len = s1.length;
  let max = 0;
  let absArr: number[] = [];

  for (let i = 0; i < len; i++) {
    let c1 = s1.charCodeAt(i);
    let c2 = s2.charCodeAt(i);
    absArr.push(Math.abs(c1 - c2));
  }

  let right = 0;
  let left = 0;
  let sum = 0;
  while (right < len) {
    sum += absArr[right]
    
    while (sum > abs) {
      sum -= absArr[left];
      left++;
    }
    max = Math.max(right - left + 1, max);
    right++;
  }

  return max;
}

console.log(nowcoder_str_compare('xxcdefg', 'cdefghi', 6))
console.log(nowcoder_str_compare('abcxef', 'bcdace', 5))