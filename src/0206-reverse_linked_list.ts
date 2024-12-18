import { ListNode } from "./linkedlist/models/listnode";

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current) {
        const next: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

export function testReverseList() {
    // Helper function to create a linked list from an array
    function createLinkedList(arr: number[]): ListNode | null {
        if (arr.length === 0) return null;
        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    // Helper function to convert a linked list to an array
    function linkedListToArray(head: ListNode | null): number[] {
        const arr = [];
        while (head) {
            arr.push(head.val);
            head = head.next;
        }
        return arr;
    }

    // Test cases
    const testCases = [
        { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
        { input: [1, 2], expected: [2, 1] },
        { input: [], expected: [] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const head = createLinkedList(input);
        const reversedHead = reverseList(head);
        const result = linkedListToArray(reversedHead);
        console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
    });

    console.log("All test cases passed!");
}