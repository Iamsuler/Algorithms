// 作者：天堂的鸽子
// 链接：https://www.nowcoder.com/discuss/643535?type=0&order=0&pos=28&page=1&channel=-1&source_id=discuss_tag_nctrack
// 来源：牛客网

// 题⽬描述：
// 100个⼈围成⼀圈，每个⼈有⼀个编码，编号从1开始到100，他们从1开始⼀次报数，报到为 M 的⼈⾃动退出圈圈，然后下⼀个⼈接着从1开始报数，直到剩余的⼈数⼩于 M 。请问最后剩 余的⼈在原先的编号为多少？

// 输⼊描述：
// 输⼊⼀个整数参数 M

// 输出描述：
// 如果输⼊参数 M ⼩于等于1或者⼤于等于100，输出 “ ERROR! ”；否则按照原先的编号从⼩到 ⼤的顺序，以英⽂逗号分隔输出编号字符串。

// 输⼊：
// 3
// 4

// 输出：
// 58,91
// 34,45,97

function nowcoder_baoshu(n: number): -1 | number[] {
  if (n <= 1 || n >= 100) {
    return -1;
  }

  const PERSON_NUM = 100;
  const persons = Array.from(new Array(PERSON_NUM), (v, k) => k + 1);
  let index = 0;

  while (persons.length >= n) {
    let len = persons.length;
    index = index + n - 1;
    index = index >= len ? index % len : index;

    persons.splice(index, 1);
    // index--;
    // index = index < 0 ? len - 1 : index;
  }

  return persons;
}

console.log(nowcoder_baoshu(3))
console.log(nowcoder_baoshu(4))
