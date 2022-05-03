function plusOne(str: string, i: number) {
  let arrStr = str.split("");
  if (arrStr[i] === "9") {
    arrStr[i] = "0";
  } else {
    arrStr[i] = (Number(arrStr[i]) + 1).toString();
  }

  return arrStr.join("");
}
function minusOne(str: string, i: number) {
  let arrStr = str.split("");
  if (arrStr[i] === "0") {
    arrStr[i] = "9";
  } else {
    arrStr[i] = (Number(arrStr[i]) - 1).toString();
  }

  return arrStr.join("");
}
function openLock(deadends: string[], target: string): number {
  let step = 0;
  let queen: string[] = [];
  let deads = [...deadends];
  let visited: string[] = [];
  queen.push("0000");
  visited.push("000000");
  while (queen.length > 0) {
    let length = queen.length;
    for (let i = 0; i < length; i++) {
      let current: string = queen.shift()!;
      if (deads.findIndex((value) => value === current) > -1) continue;
      if (current === target) return step;
      for (let j = 0; j < 4; j++) {
        let up = plusOne(current, j);
        let down = minusOne(current, j);
        if (visited.findIndex((value) => value === up) === -1) {
          queen.push(up);
          visited.push(up);
        }
        if (visited.findIndex((value) => value === down) === -1) {
          queen.push(down);
          visited.push(down);
        }
      }
    }
    step++;
  }
  return -1;
}

const step = openLock(["0201", "0101", "0102", "1212", "2002"], "0202");
console.log(step);
