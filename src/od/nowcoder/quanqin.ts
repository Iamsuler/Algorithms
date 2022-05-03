/*
1、考勤全勤奖
absent 缺勤
late 迟到
leaveearly 早退
present 正常上班

能获得全勤奖的条件：
缺勤次数不超过1次
不能连续迟到/早退
任意的连续7次考勤中，缺勤、迟到、早退的次数不超过3次。

案例1输入：
第一行代表输入一个数字n，代表接下来要输入n行字符串，
每行字符串都要输出一个结果，获得全勤奖输出true ,否则false
所有的结果是一行输出的，空格连接。

2
present
present absent present present leaveearly present absent

true false


1
present absent present present leaveearly present absent 

false

*/

function resolveQuanqin(records: string[]): boolean {
  let len = records.length;
  let right = 0;
  let absentCount = 0; // 缺勤次数
  let continueCount = 0; // 连续迟到早退次数
  let inWeekContinueCount = 0; // 7次考勤中，缺勤、迟到、早退的次数
  let windows: string[] = []

  while (right < len) {
    let cur = records[right];

    if (cur === 'absent') {
      absentCount++;

      // 缺勤次数不超过1次
      if (absentCount > 1) {
        return false;
      }
    } else if (['late', 'leaveearly'].includes(cur)) {
      // 是否连续迟到/早退
      continueCount++;

      if (continueCount >= 2) {
        return false;
      }
    } else {
      continueCount = 0;
    }

    windows.push(cur);

    if (windows.length > 7) {
      let last = windows.shift();

      if (['late', 'leaveearly', 'absent'].includes(last!)) {
        inWeekContinueCount--;
      }
    }


    if (['late', 'leaveearly', 'absent'].includes(cur)) {
      inWeekContinueCount++;

      if (inWeekContinueCount >= 3) {
        return false;
      }
    }

    right++;
  }

  return true;
}

function quanqin(records: string[][]): boolean[] {
  let res: boolean[] = [];
  let len = records.length;

  for (let i = 0; i < len; i++) {
    res.push(resolveQuanqin(records[i]))
  }

  return res;
}

console.log(quanqin(
  [
    ['present'],
    ['present', 'absent', 'present', 'present', 'leaveearly', 'present', 'absent']
  ]
))
console.log(quanqin(
  [
    ['present', 'absent', 'present', 'present', 'leaveearly', 'present', 'absent']
  ]
))
