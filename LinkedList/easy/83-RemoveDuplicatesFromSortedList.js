function setNodes(val, next = null) {
  this.val = val;
  this.next = next;
}

let head = new setNodes(1, new setNodes(1));

var deleteDuplicates = function (head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next; // Skip duplicate
    } else {
      current = current.next; // Move forward only if no deletion
    }
  }

  return head; // Return original head
};

console.log(deleteDuplicates(head));
