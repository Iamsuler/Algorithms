export class LinkedListNode implements LinkedListNode {
  value: any;
  next: LinkedListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
