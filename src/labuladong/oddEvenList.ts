// 奇偶链表
// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。 请尝试使用原地算法完成。你的算法的空间复杂度应为O(1)，时间复杂度应为O(n)。

function oddEvenList(head: LinkedListNode): LinkedListNode {
  if (head === null || head.next === null || head.next.next === null) {
    return head;
  }

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = <LinkedListNode>even.next;
  }

  odd.next = evenHead;

  return head;
}
