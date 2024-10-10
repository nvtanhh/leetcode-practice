import { createLinkedList, ListNode } from "./models/listnode";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    /*
        Time Complexity: O(max(m, n))
        Space Complexity: O(max(m, n))
    */


    if (!l1 || !l2) {
        return l1 ?? l2;
    }


    let node = new ListNode();
    let nextNode = node;
    let remainder = 0;

    while (l1 || l2) {
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        const sum = val1 + val2 + remainder;

        remainder = Math.floor(sum / 10)
        nextNode.next = new ListNode(sum % 10);

        nextNode = nextNode.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    if (remainder > 0) {
        nextNode.next = new ListNode(remainder)
    }

    return node.next;
};


export function testAddTwoNumbers() {
    function linkedListToArray(list: ListNode | null): number[] {
        let arr: number[] = [];
        while (list !== null) {
            arr.push(list.val);
            list = list.next;
        }
        return arr;
    }

    const testCases: { l1: number[], l2: number[], expectedOutput: number[] }[] = [
        { l1: [2, 4, 3], l2: [5, 6, 4], expectedOutput: [7, 0, 8] },
        { l1: [0], l2: [0], expectedOutput: [0] },
        { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expectedOutput: [8, 9, 9, 9, 0, 0, 0, 1] },
        { l1: [], l2: [1, 2, 3], expectedOutput: [1, 2, 3] },
        { l1: [1, 2, 3], l2: [], expectedOutput: [1, 2, 3] }
    ];

    testCases.forEach(({ l1, l2, expectedOutput }, index) => {
        const list1 = createLinkedList(l1);
        const list2 = createLinkedList(l2);
        const result = addTwoNumbers(list1, list2);
        const resultArray = linkedListToArray(result);
        console.assert(JSON.stringify(resultArray) === JSON.stringify(expectedOutput), `Test case ${index + 1} failed: expected ${JSON.stringify(expectedOutput)}, got ${JSON.stringify(resultArray)}`);
    });

    console.log("All test cases passed!");
}