function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midNum = nums[mid];

        if (midNum === target)
            return mid;

        if (midNum > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return -1;
};


export function testBinarySearch() {
    // Test cases
    const testCases = [
        { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 }, // Target is in the array
        { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 }, // Target is not in the array
        { nums: [5], target: 5, expected: 0 }, // Single element array, target is present
        { nums: [5], target: -5, expected: -1 }, // Single element array, target is not present
        { nums: [], target: 1, expected: -1 }, // Empty array
        { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 10, expected: 9 }, // Target is the last element
        { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 1, expected: 0 }, // Target is the first element
        { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 6, expected: 5 }, // Target is in the middle
        { nums: [2, 5], target: 2, expected: 0 }
    ];

    testCases.forEach(({ nums, target, expected }, index) => {
        const result = search(nums, target);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
