class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
  reverse() {
    this.reverseRecursive(this.head, null);
  }
  reverseRecursive(current, prev) {
    if (current === null) {
      this.head = prev;
      return;
    }

    const next = current.next;
    current.next = prev;

    this.reverseRecursive(next, current);
  }

  printList() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let ll = new LinkedList();
let values = [1, 2, 3, 4, 5];
values.forEach((n) => {
  ll.append(n);
});
ll.printList();
ll.reverse();
ll.printList();
