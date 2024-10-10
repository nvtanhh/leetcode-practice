import { createLinkedList, ListNode } from "./models/listnode";

function hasCycle(head: ListNode | null): boolean {
    const set = new Set();

    console.log(head);


    let cur = head;
    while (true) {
        if (!cur) {
            return false;
        }

        if (set.has(cur.next)) {
            return true;
        }

        set.add(cur);
        cur = cur.next;
    }
};


export function testHasCycle() {
    // Helper function to create a cycle in the linked list
    function createCycle(head: ListNode, pos: number): void {
        if (pos < 0) return;
        let cycleNode: ListNode | null = null;
        let current = head;
        let index = 0;
        while (current.next) {
            if (index === pos) {
                cycleNode = current;
            }
            current = current.next;
            index++;
        }
        current.next = cycleNode;
    }

    // Test cases
    const testCases = [
        { list: [3, 2, 0, -4], pos: 1, expected: true }, // Cycle at position 1
        { list: [1, 2], pos: 0, expected: true }, // Cycle at position 0
        { list: [1], pos: -1, expected: false }, // No cycle
        { list: [], pos: -1, expected: false }, // Empty list
        { list: [1, 2, 3, 4, 5], pos: -1, expected: false } // No cycle
    ];

    testCases.forEach(({ list, pos, expected }, index) => {
        const head = createLinkedList(list);
        if (pos >= 0) {
            createCycle(head!, pos);
        }
        const result = hasCycle(head);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}