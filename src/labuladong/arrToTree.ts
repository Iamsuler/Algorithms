// 将数组转换成树

interface TreeNode {
  id: number;
  parentId: number | null;
  children?: TreeNode[];
  val: string;
}

function travers(arr: TreeNode[]) {
  let obj: TreeNode = {} as TreeNode;
  let cache: Record<number, TreeNode> = {};
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const { id, parentId } = arr[i];
    if (cache[id]) {
      Object.assign(cache[id], arr[i]);
    } else {
      cache[id] = { ...arr[i], children: [] };
    }

    if (parentId === null) {
      obj = cache[id];
    } else {
      if (cache[parentId]) {
        cache[parentId].children?.push(cache[id]);
      } else {
        cache[parentId] = { children: [cache[id]] } as TreeNode;
      }
    }
  }

  return obj;
}

const arr1: TreeNode[] = [
  {
    id: 1,
    val: "学校",
    parentId: null,
  },
  {
    id: 2,
    val: "班级1",
    parentId: 1,
  },
  {
    id: 3,
    val: "班级2",
    parentId: 1,
  },
  {
    id: 4,
    val: "学生1",
    parentId: 2,
  },
  {
    id: 5,
    val: "学生2",
    parentId: 3,
  },
  {
    id: 6,
    val: "学生3",
    parentId: 3,
  },
];

console.log(travers(arr1));
