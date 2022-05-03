// 合并两个有序链表
// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

import { LinkedListNode } from './LinkedList';

function mergeTwoLists(l1: LinkedListNode, l2: LinkedListNode): LinkedListNode {
  let tempHead: LinkedListNode = new LinkedListNode(-1);
  let tempNode = tempHead;
  while (l1 && l2) {
    if (l1.value <= l2.value) {
      tempNode.next = l1;
      l1 = <LinkedListNode>l1.next;
    } else {
      tempNode.next = l2;
      l2 = <LinkedListNode>l2.next;
    }
    tempNode = tempNode.next;
  }

  tempNode.next = l1 || l2;

  return <LinkedListNode>tempHead.next;
}
