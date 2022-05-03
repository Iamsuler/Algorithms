// 给定一个数组，求能组合的最大3的倍数

function largestMultipleOfThree(digits: number[]): string {
  digits.sort((a, b) => b - a);
  const len = digits.length;
  let res: number[] = [];
  let track: number[] = [];
  function backtrack(digits: number[], start: number, track: number[]) {
    let sum = track.reduce((prev, next) => prev + next, 0);
    if (sum % 3 === 0) {
      const trackLen = track.length;
      const resLen = res.length;
      if (trackLen > resLen) {
        res = [...track];
      } else if (trackLen === resLen) {
        for (let i = 0; i < trackLen; i++) {
          if (track[i] > res[i]) {
            res = [...track];
          }
        }
      }
    }
    for (let i = start; i < len; i++) {
      track.push(digits[i]);
      backtrack(digits, i + 1, track);
      track.pop();
    }
  }
  backtrack(digits, 0, track);

  return res.join("");
}

console.log(largestMultipleOfThree([8, 6, 7, 1, 0, 2]));
