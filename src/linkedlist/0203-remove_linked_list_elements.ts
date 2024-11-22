import { ListNode } from "./models/listnode";

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr != null) {
        let next = curr.next;
        while (next != null && next.val === val) {
            next = next.next;
        }

        curr.next = next;
        curr = curr.next;
    }

    return dummy.next;
};