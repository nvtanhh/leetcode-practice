import { createLinkedList, ListNode } from "./linkedlist/models/listnode";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const set = new Set();

    let curA = headA;
    while (curA) {
        set.add(curA);
        curA = curA.next;
    }

    let curB = headB;
    while (curB) {
        if (set.has(curB)) {
            return curB;
        }

        curB = curB.next;
    }
};

export function testGetIntersectionNode() {
    // Helper function to find a node by value
    function findNode(head: ListNode | null, value: number): ListNode | null {
        let current = head;
        while (current !== null) {
            if (current.val === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Test cases
    const testCases = [
        {
            listA: [4, 1, 8, 4, 5],
            listB: [5, 6, 1],
            intersectVal: 8,
            expected: 8
        },
        {
            listA: [1, 9, 1, 2, 4],
            listB: [3],
            intersectVal: 2,
            expected: 2
        },
        {
            listA: [2, 6, 4],
            listB: [1, 5],
            intersectVal: -1,
            expected: null
        }
    ];

    testCases.forEach(({ listA, listB, intersectVal, expected }, index) => {
        const headA = createLinkedList(listA);
        const headB = createLinkedList(listB);

        if (intersectVal !== -1) {
            const intersectionNode = findNode(headA, intersectVal);
            if (intersectionNode) {
                let currentB = headB;
                while (currentB && currentB.next) {
                    currentB = currentB.next;
                }
                if (currentB) {
                    currentB.next = intersectionNode;
                }
            }
        }

        const result = getIntersectionNode(headA, headB);
        const resultVal = result ? result.val : null;
        console.assert(resultVal === expected, `Test case ${index + 1} failed: expected ${expected}, got ${resultVal}`);
    });

    console.log("All test cases passed!");
}