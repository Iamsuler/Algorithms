// 题目描述

// 疫情过后，希望小学终于又重新开学了，三年二班开学第一天的任务是将后面的黑板报重新制作。

// 黑板上已经写上了N个正整数，同学们需要给这每个数分别上一种颜色。

// 为了让黑板报既美观又有学习意义，老师要求同种颜色的所有数都可以被这种颜色中最小的那个数整除。

// 现在请你帮帮小朋友们，算算最少需要多少种颜色才能给这N个数进行上色。

// 输入描述:
// 第一行有一个正整数N，其中1≤N≤100。
// 第二行有N个int型数(保证输入数据在[1,100]范围中)，表示黑板上各个正整数的值。
// 输出描述:
// 输出只有一个整数，为最少需要的颜色种数。
// 示例1
// 输入

// 1
// 2
// 3
// 2 4 6
// 输出

// 1
// 1
// 说明

// 所有数都能被2整除。

// 示例2
// 输入

// 1
// 2
// 4
// 2 3 4 9
// 输出

// 1
// 2
// 说明

// 2与4涂一种颜色，4能被2整除；3与9涂另一种颜色，9能被3整除。

// 不能4个数涂同一个颜色，因为3与9不能被2整除。

// 所以最少的颜色是两种。

function nowcoder_number_paint(nums: number[]): number {
  let len = nums.length;
  let res: number[] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    let cur = nums[i];

    let len2 = res.length;
    let j = 0;

    while (j < len2) {
      if (cur % res[j] === 0) {
        break;
      }

      j++;
    }

    if (j === len2) {
      res.push(cur);
    }
  }

  return res.length;
}

console.log(nowcoder_number_paint([2, 4, 6]));
console.log(nowcoder_number_paint([2, 3, 4, 9, 5, 6, 7]));