interface LinkedListNode {
  value: any;
  next: LinkedListNode | null;
}

interface LinkedList {
  head: LinkedListNode;
  remove(el: LinkedListNode): void;
  find(value: any): LinkedListNode | null;
  insert(el: LinkedListNode, value: any): void;
}
