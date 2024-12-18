function intersection(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const intersection = new Set<number>();
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            intersection.add(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return Array.from(intersection);
};