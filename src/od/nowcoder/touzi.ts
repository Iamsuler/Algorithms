// 题目描述：

// 骰子是一个立方体，每个面一个数字，初始为左 1，右 2，前 3（观察者方向），

// 后 4，上 5，下 6，用 123456 表示这个状态，放置到平面上。

// 可以向左翻转（用 L表示向左翻转 1 次）
// 可以向右翻转（用 R 表示向右翻转 1 次）
// 可以向前翻转（用 F 表示向前翻转 1 次）
// 可以向后翻转（用 B 表示向后翻转 1 次）
// 可以逆时针旋转（用 A表示逆时针旋转 90 度）
// 可以顺时针旋转（用 C 表示顺时针旋转 90 度）
// 现从 123456 这个初始状态开始，根据输入的动作序列，计算得到最终的状态。

// 骰子的初始状态和初始状态转动后的状态如图所示。

// 输入描述：

// 输入一行，为只包含 LRFBAC 的字母序列，最大长度 50，字母可重复。

// 输出描述：

// 输出最终状态。

// 示例 1：

// 输入

// 1
// LR
// 输出

// 1
// 1 2 3 4 5 6
// 左右前后上下
function turnL(str: string): string{
  let arr = str.split('');
  let temp = arr[0];
  arr[0] = arr[4];
  arr[4] = arr[1];
  arr[1] = arr[5];
  arr[5] = temp;

  return arr.join('')
}
function turnR(str: string): string{
  let arr = str.split('');
  let temp = arr[1];
  arr[1] = arr[4];
  arr[4] = arr[0];
  arr[0] = arr[5];
  arr[5] = temp;

  return arr.join('')
}
function turnF(str: string): string{
  let arr = str.split('');
  let temp = arr[0];
  arr[0] = arr[4];
  arr[4] = arr[1];
  arr[1] = arr[5];
  arr[5] = temp;

  return arr.join('')
}
function turnB(str: string): string{
  let arr = str.split('');
  let temp = arr[0];
  arr[0] = arr[4];
  arr[4] = arr[1];
  arr[1] = arr[5];
  arr[5] = temp;

  return arr.join('')
}
function turnA(str: string): string{
  let arr = str.split('');
  let temp = arr[0];
  arr[0] = arr[4];
  arr[4] = arr[1];
  arr[1] = arr[5];
  arr[5] = temp;

  return arr.join('')
}
function turnC(str: string): string{
  let arr = str.split('');
  let temp = arr[0];
  arr[0] = arr[4];
  arr[4] = arr[1];
  arr[1] = arr[5];
  arr[5] = temp;

  return arr.join('')}
function nowcoder_touzi(str: string): string {
  let len = str.length;

  for (let i = 0; i < len; i++) {
    let cur = str[i];
    let s = '123456';

    switch (cur) {
      case 'L':
        s = turnL(s);
        break;
      case 'R':
        s = turnR(s);
        break;
      case 'F':
        s = turnF(s);
        break;
      case 'B':
        s = turnB(s);
        break;
      case 'A':
        s = turnA(s);
        break;
      case 'C':
        s = turnC(s);
        break;
      default:
        break;
    }
  }
  return s;
}
