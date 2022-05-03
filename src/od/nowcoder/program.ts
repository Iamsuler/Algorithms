// 组对方式

// 用一个数组A代表程序员的工作能力，公司想通过结对编程的方式提高员工的能力，假设结对后的能力为两个员工的能力之和，求一共有多少种结对方式使结对后能力为N。

// 输入描述:

// 5
// 1 2 2 2 3
// 4
// 第一行为员工的总人数，取值范围[1,1000]
// 第二行为数组A的元素，每个元素的取值范围[1,1000]
// 第三行为N的值，取值范围[1,1000]
// 输出描述:
// 4

function nowcoder_progam(nums: number[], target: number): number {
  const len = nums.length;
  let res = 0;

  for (let i = 0; i < len; i++) {
    let cur = target - nums[i];
    for (let j = i + 1; j < len; j++) {
      if (cur === nums[j]) {
        res++;
      }
    }
  }

  return res;
}

console.log(nowcoder_progam([1, 2, 2, 2, 3], 4))