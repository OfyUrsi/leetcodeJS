function listNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const list1 = new listNode(2, new listNode(4, new listNode(3)));
const list2 = new listNode(5, new listNode(6, new listNode(4)));

function addTwoNumbers(list1, list2) {
  let carry = 0;
  let finalList = new listNode(0);
  let tempList = finalList;

  while (list1 !== null || list2 !== null || carry !== 0) {
    let l1 = list1 ? list1.val : 0;
    let l2 = list2 ? list2.val : 0;

    let sum = l1 + l2 + carry;
    carry = Math.floor(sum / 10);
    tempList.next = new listNode(Math.floor(sum % 10));
    tempList = tempList.next;

    if (list1) list1 = list1.next;
    if (list2) list2 = list2.next;
  }
  return finalList.next;
}

let result = addTwoNumbers(list1, list2);

let sumList = [];

while (result !== null) {
  sumList.push(result.val);
  result = result.next;
}

console.log(sumList);

// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }

// function addTwoNumbers(list1, list2) {
//   let carry = 0;
//   let sumList = new ListNode(0);
//   let tempList = sumList;
//   while (list1 !== null || list2 !== null || carry !== 0) {
//     let l1 = list1 ? list1.val : 0;
//     let l2 = list2 ? list2.val : 0;

//     let sum = l1 + l2 + carry;
//     carry = Math.floor(sum / 10);
//     tempList.next = new ListNode(sum % 10);
//     tempList = tempList.next;

//     if (list1) list1 = list1.next;
//     if (list2) list2 = list2.next;
//   }
//   return sumList.next;
// }

// let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// let newList = addTwoNumbers(l1, l2);
// let result = [];
// while (newList !== null) {
//   result.push(newList.val);
//   newList = newList.next;
// }

// console.log(result);
