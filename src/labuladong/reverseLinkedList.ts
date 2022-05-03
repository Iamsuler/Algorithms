// 反转链表
// 反转一个单链表。

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// function reverseLinkedList(head: LinkedListNode): LinkedListNode {
//   if (head === null || head.next === null) {
//     return head;
//   }

//   let p = head.next;
//   head.next = null; // 旧的头指针是新的尾指针,next需要指向null

//   while (p) {
//     const temp = p.next; // 先保留下一个step要处理的指针
//     p.next = head; // 然后p和head进行反向
//     head = p; // 指针后移
//     p = <LinkedListNode>temp; // 指针后移
//   }

//   return head;
// }

function reverseLinkedList(head: LinkedListNode): LinkedListNode {
  if (head === null || head.next === null) {
    return head;
  }

  const last = reverseLinkedList(head.next);

  head.next.next = head;
  head.next = null;

  return last;
}
