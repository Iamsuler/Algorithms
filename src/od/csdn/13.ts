/*
  二叉树也可以用数组来存储
  给定一个数组
  树的根节点的值储存在下标1
  对于储存在下标n的节点，
  他的左子节点和右子节点分别储存在下标2*n和2*n+1
  并且我们用-1代表一个节点为空
  给定一个数组存储的二叉树
  试求从根节点到最小的叶子节点的路径
  路径由节点的值组成

  输入描述
  输入一行为数组的内容
  数组的每个元素都是正整数，元素间用空格分割
  注意第一个元素即为根节点的值
  即数组的第n元素对应下标n
  下标0在树的表示中没有使用
  所以我们省略了
  输入的树最多为7层

  输出描述
    输出从根节点到最小叶子节点的路径上各个节点的值
    由空格分割
    用例保证最小叶子节点只有一个

    例子
    输入
    3 5 7 -1 -1 2 4
    输出
      3 7 2

    例子
      输入
    5 9 8 -1 -1 7 -1 -1 -1 -1 -1 6
      输出
    5 8 7 6
*/

function resolve13(tree: number[]): number[] {
  if (tree.length < 2) {
    return tree;
  }
  tree.unshift(Number.MAX_SAFE_INTEGER);
  let minIndex = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let res: number[] = [];

  for (let i = 2; i < tree.length; i++) {
    let cur = tree[i];
    if (cur !== -1 && cur < min) {
      min = tree[i];
      minIndex = i;
    }
  }

  while (minIndex > 0) {
    res.push(tree[minIndex]);
    minIndex = Math.floor(minIndex / 2);
  }

  return res.reverse()
}

console.log(resolve13([3, 5, 7, -1, -1, 2, 4]));
console.log(resolve13([5, 9, 8, -1, -1, 7, -1, -1, -1, -1, -1, 6]));
