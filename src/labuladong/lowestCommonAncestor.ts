function lowestCommonAncestor(root: any, p: any, q: any): any {
  // base case
  if (root === null) return null;
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;
  if (left === null && right === null) return null;
  return left === null ? right : left;
}
