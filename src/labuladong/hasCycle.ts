// 给定一个链表，判断链表中是否有环。

function hasCycle(head: LinkedListNode): boolean {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = <LinkedListNode>fast.next.next;
    slow = <LinkedListNode>slow.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
