function ListNodes(val, next = null) {
  this.val = val;
  this.next = next;
}

let list1 = new ListNodes(1, new ListNodes(2, new ListNodes(4)));
let list2 = new ListNodes(1, new ListNodes(3, new ListNodes(4)));

function mergeTwoLists(list1, list2) {
  let mergedList = new ListNodes(0);
  let current = mergedList;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 !== null ? list1 : list2;
  return mergedList.next;
}
