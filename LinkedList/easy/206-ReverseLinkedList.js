function ListNodes(val, next = null) {
  this.val = val;
  this.next = next;
}

let head = new ListNodes(
  1,
  new ListNodes(2, new ListNodes(3, new ListNodes(4, new ListNodes(5))))
);

let result = reverseList(head);

let finalArr = [];
while (result !== null) {
  finalArr.push(result.val);
  result = result.next;
}
console.log(finalArr);

function reverseList(head) {
  let current = head;
  let prev = null;

  while (current !== null) {
    let next = current.next; // 2
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
