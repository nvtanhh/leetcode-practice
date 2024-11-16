import { ListNode } from "../models/listnode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0);
    dummy.next = head;

    let l = dummy;
    let r = dummy;

    // Move first n steps ahead
    for (let i = 0; i < n; i++) {
        l = l.next;
    }

    // Move both to the end, maintaining the gap
    while (l.next) {
        l = l.next;
        r = r.next;
    }

    r.next = r.next.next;

    return dummy.next;
};