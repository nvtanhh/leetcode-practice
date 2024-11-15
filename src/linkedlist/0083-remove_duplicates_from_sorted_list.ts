import { ListNode } from "../models/listnode";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;

    while (curr != null) {
        if (prev != null && prev.val == curr.val ) {
            curr = curr.next;
            prev.next = curr;
            curr = curr.next;
            continue;
        }

        if(curr == null){
            break;
        }

        prev = curr;
        curr = curr.next;
    }

    return head;

};