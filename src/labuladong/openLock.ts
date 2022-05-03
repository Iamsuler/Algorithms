// 开锁
// 一个带有四个圆形拨盘的密码锁，没个拨轮有0-9共10个数字，每次只能将一个拨轮转动一下
// 初始是‘0000’，给定一个deads数组和一个target字符串，求最少字数
function plusOne(s: string, index: number): string {
  let sArr = s.split("");
  let cur = Number(sArr[index]);
  cur = cur === 9 ? 0 : cur++;
  sArr[index] = cur.toString();
  return sArr.join("");
}
function minusOne(s: string, index: number): string {
  let sArr = s.split("");
  let cur = Number(sArr[index]);
  cur = cur === 0 ? 9 : cur--;
  sArr[index] = cur.toString();
  return sArr.join("");
}

function openLock(deads: string[], target: string): number {
  let step = 0;
  const queen: string[] = [];
  const visiteds: string[] = [];
  const start = "0000";
  queen.push(start);
  visiteds.push(start);

  while (queen.length) {
    const len = queen.length;
    for (let j = 0; j < len; j++) {
      const cur = queen.shift();
      if (deads.includes(cur!)) {
        continue;
      }
      if (cur === target) {
        return step;
      }

      for (let i = 0; i < 4; i++) {
        const up = plusOne(cur!, i);
        const down = minusOne(cur!, i);
        if (!visiteds.includes(up)) {
          queen.push(up);
          visiteds.push(up);
        }
        if (!visiteds.includes(down)) {
          queen.push(down);
          visiteds.push(down);
        }
      }
    }

    step++;
  }

  return -1;
}

console.log(openLock(["1234", "5678"], "0009"));
