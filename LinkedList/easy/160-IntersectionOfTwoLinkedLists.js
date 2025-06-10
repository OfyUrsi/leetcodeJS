function setNodes(val, next = null) {
  this.val = val;
  this.next = next;
}

let headA = new setNodes(
  4,
  new setNodes(1, new setNodes(8, new setNodes(4, new setNodes(5))))
);
let headB = new setNodes(
  5,
  new setNodes(
    6,
    new setNodes(1, new setNodes(8, new setNodes(4, new setNodes(5))))
  )
);

function getIntersectionNode(headA, headB) {
  let hA = headA;
  let hB = headB;

  while (hA !== hB) {
    hA = hA !== null ? hA.next : headB;
    hB = hB !== null ? hB.next : headA;
  }
  return hA;
}

console.log(getIntersectionNode(headA, headB));
