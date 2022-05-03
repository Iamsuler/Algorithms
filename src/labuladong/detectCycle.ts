// 已知链表有环，求环的起始位置

function detectCycle(head: LinkedListNode): LinkedListNode {
  let slow = head;
  let fast = head;

  // 找出相遇地点
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next!;
    slow = slow.next!;

    if(slow === fast) break;
  }

  slow = head;

  while (slow !== fast) {
    fast = fast.next!;
    slow = slow.next!;
  }

  return slow;
}