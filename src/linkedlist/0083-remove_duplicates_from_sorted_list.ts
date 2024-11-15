import { ListNode } from "../models/listnode";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;

    while (curr != null) {
        let next = curr.next;
        while (next != null && next.val === curr.val) {
            next = next.next;
        }

        curr.next = next;
        curr = curr.next;
    }

    return head;
}