// 【编程 | 100分】最多团队

// 用数组代表每个人的能力，一个比赛活动要求参赛团队的最低能力值为N，每个团队可以由1人或2人组成，

// 且1个人只能参加1个团队， 请计算出最多可以派出多少支符合要求的团队？

// 输入描述:

// 5

// 3 1 5 7 9

// 8

// 第一行数组代表总人数，范围[1,500000]

// 第二行数组代表每个人的能力，每个元素的取值范围[1, 500000]，数组的大小范围[1,500000]

// 第三行数值为团队要求的最低能力值，范围[1, 500000]

// 输出描述:

// 3
// 最多可以派出的团队数量

// 示例1

// 输入

// 5
// 3 1 5 7 9
// 8
// 输出

// 3
// 说明

// 3,5组成一队，1,7组成一队，9自己一个队，故输出3

// 示例2

// 输入

// 7
// 3 1 5 7 9 2 6
// 8
// 输出

// 1
// 4
// 说明

// 1、7组成一队 3、5一队 2、6一队 9自己一队 输出4

// 示例3

// 输入

// 3
// 1 1 9
// 8
// 输出

// 1
// 说明

// 1、9组成一队 或者9自己一队 输出1

function nowcoder_max_team(team: number[], maxAbility: number): number {
  team.sort((a, b) => a - b);

  const len = team.length;
  let left = 0;
  let right = len - 1;
  let res = 0;

  while (left < right) {
    if (team[right] >= maxAbility) {
      res++;
      right--;
    } else {
      if (team[left] + team[right] >= maxAbility) {
        res++;
        left++;
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
}

console.log(nowcoder_max_team([1, 1, 9], 8));
console.log(nowcoder_max_team([3, 1, 5, 7, 9, 2, 6], 8));
console.log(nowcoder_max_team([3, 1, 5, 7, 9], 8));