import { ListNode } from "../models/listnode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy;
    let second = dummy;

    // Move first n steps ahead
    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    // Move both to the end, maintaining the gap
    while (first.next) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
};