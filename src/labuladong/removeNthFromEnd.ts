// 删除链表的倒数第N个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

function removeNthFromEnd(head: LinkedListNode, n: number): LinkedListNode {
  let fast = head;
  while (n > 0) {
    fast = <LinkedListNode>fast.next;
    n--;
  }
  if (!fast) {
    return <LinkedListNode>head.next;
  }
  let slow = head;
  while (fast.next) {
    slow = <LinkedListNode>slow.next;
    fast = <LinkedListNode>fast.next;
  }

  slow.next = <LinkedListNode>slow.next?.next;

  return head;
}
